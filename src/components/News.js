import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
    constructor(){
        super();
        this.state = {
           article : []
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=fc127c7be20d4f0b9e8acf1a9fbd0988"
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({article: parsedData.articles})
    }

  render() {
    return (
      <div className="container my-3">
        <h4> News Monkey - Top Headlines </h4>
        <div className="row">
        {this.state.article.map((e) => {
          return <div className="col-md-4 NewsCard mb-3" key={e.url}>
            <NewsItem
              title={e.title?e.title.slice(0,45):""}
              description={e.description?e.description.slice(0,88):""}
              imgUrl={e.urlToImage}
              newsUrl = {e.url}
            />
          </div>
        })}
        </div>
      </div>
    );
  }
}

export default News;
