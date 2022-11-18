import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "../App.css";
import Spinner from "./Spinner";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
      page: 1,
      loading: false
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=fc127c7be20d4f0b9e8acf1a9fbd0988&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      article: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePrevClick = async () => {
    console.log("Prev");

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fc127c7be20d4f0b9e8acf1a9fbd0988&page=${
      this.state.page - 1
    }&pageSize= ${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      article: parsedData.articles,
      loading: false,
    });
  };

  handleNextClick = async () => {
    console.log("next");

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fc127c7be20d4f0b9e8acf1a9fbd0988&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      article: parsedData.articles,
      loading: false
    });
  };

  render() {
    return (
        <div className="container my-3">
        <h1 className="text-center"> News Monkey - Top Headlines </h1>
         {this.state.loading &&  <Spinner/> }
        <div className="row ">
          { !this.state.loading && this.state.article.map((e) => {
            return (
              <div className="col-md-4 NewsCard mb-3" key={e.url}>
                <NewsItem
                  title={e.title ? e.title.slice(0, 45) : ""}
                  description={e.description ? e.description.slice(0, 88) : ""}
                  imgUrl={e.urlToImage}
                  newsUrl={e.url}
                />
              </div>
            );
          })}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-primary"
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-primary"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
