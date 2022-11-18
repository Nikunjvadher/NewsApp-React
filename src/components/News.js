import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=fc127c7be20d4f0b9e8acf1a9fbd0988&page=1&pageSize=21";
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      article: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlePrevClick = async () => {
    console.log("Prev");

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fc127c7be20d4f0b9e8acf1a9fbd0988&page=${
      this.state.page - 1
    }&pageSize=21`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      article: parsedData.articles,
    });
  };

  handleNextClick = async () => {
    console.log("next");

    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
      // console.log('No more pages');
      alert("No more News pages");
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fc127c7be20d4f0b9e8acf1a9fbd0988&page=${
        this.state.page + 1
      }&pageSize=21`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        article: parsedData.articles,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2> News Monkey - Top Headlines </h2>
        <div className="row">
          {this.state.article.map((e) => {
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
            // hidden={this.state.page <= 1}
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
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
