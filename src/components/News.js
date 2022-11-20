import React, { useEffect ,  useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import "../App.css";

const  News = (props) => {

  const [articles , setArticles] = useState([])
  const [loading , setLoading] = useState(true)
  const [page , setPage] = useState(1)
  const [totalResults , setTotalResults] = useState(0)
 

  const capitalized = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async() =>  {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fc127c7be20d4f0b9e8acf1a9fbd0988&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    setLoading(false)
    setTotalResults(parsedData.totalResults)
    props.setProgress(100);
  }

  useEffect(()=> {
    updateNews();
    document.title = `NewsMonkey - ${capitalized(props.category)}`;
  })


  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fc127c7be20d4f0b9e8acf1a9fbd0988&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    totalResults(parsedData.totalResults)
  };

    return (
      <>
        <h1 className="text-center mt-6 fw-bold">
          {/* {" "} */}
          NewsMonkey - Top {capitalized(props.category)} Headlines
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container my-3">
            <div className="row">
              {articles.map((e) => {
                return (
                  <div className="col-md-4 NewsCard mb-3" key={e.url}>
                    <NewsItem
                      title={e.title ? e.title.slice(0, 70) : ""}
                      description={e.description ? e.description.slice(0, 115) : ""}
                      imgUrl={e.urlToImage}
                      newsUrl={e.url}
                      author={e.author}
                      date={e.publishedAt}
                      source={e.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
}

//  defaultProps = {
//   country: "in",
//   pageSize: 21,
//   category: "general",
//   // totalResults: 0,
// };

//  propTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string,
// };

export default News;
