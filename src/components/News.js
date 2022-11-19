import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "../App.css";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 21,
    category: 'general',

  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  capitalized = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      article: [],
      page: 1,
      loading: false
    };
    document.title = `NewsMonkey - ${this.capitalized(this.props.category)}`
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fc127c7be20d4f0b9e8acf1a9fbd0988&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      article: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePrevClick = async () => {
    console.log("Prev");

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fc127c7be20d4f0b9e8acf1a9fbd0988&page=${
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

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fc127c7be20d4f0b9e8acf1a9fbd0988&page=${
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
        <h1 className="text-center my-4 fw-bold"> News Monkey - Top Headlines from {this.capitalized(this.props.category)}</h1>
         {this.state.loading &&  <Spinner/> }
        <div className="row ">
          { !this.state.loading && this.state.article.map((e) => {
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
