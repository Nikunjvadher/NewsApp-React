import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

    articles = [
        {
            "source": {
                "id": null,
                "name": "BuffaloBills.com"
            },
            "author": "Buffalo Bills",
            "title": "Sunday's Bills-Browns game moved to Detroit, fans to receive ticket refunds purchased through the Bills or Ticketmaster - BuffaloBills.com",
            "description": "The game will still be televised on CBS at 1 p.m.",
            "url": "https://www.buffalobills.com/news/bills-browns-ford-field-detroit-fans-receive-ticket-refunds",
            "urlToImage": "https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/bills/ut0ygj0ifkwk6uwa0tia",
            "publishedAt": "2022-11-18T04:23:54Z",
            "content": "Bills EVP/COO Ron Raccuia and Bills GM Brandon Beane held a press conference via Zoom Thursday evening to discuss the change in location for Sunday's game and other important topics including ticket … [+2696 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "North Korea fires ICBM into sea west of Japan - BBC",
            "description": "It follows Thursday's warning of a \"fiercer\" response to US plans to boost its regional presence.",
            "url": "https://www.bbc.com/news/world-asia-63672399",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/E4B3/production/_127674585_498a5b81b1572ad8960db0b331b5e2ab22e485a60_0_5078_33852000x1333.jpg",
            "publishedAt": "2022-11-18T04:08:41Z",
            "content": "North Korea has launched an intercontinental ballistic missile (ICBM), South Korea says.\r\nPyongyang's longer range missiles are designed to bring the US mainland within range.\r\nJapan's Coast Guard sa… [+2491 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Dakin Andone, Amir Vera, Jamiel Lynch",
            "title": "Federal appeals court grants Alabama death row inmate last-minute stay of execution - CNN",
            "description": "The US Supreme Court has overruled a federal appeals court's stay of execution for Alabama death-row prisoner Kenneth Smith, allowing the state to proceed with Smith's execution before his death warrant expires at midnight Thursday.",
            "url": "https://www.cnn.com/2022/11/17/us/kenneth-smith-alabama-execution/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221116085016-kenneth-smith-alabama-inmate.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2022-11-18T03:48:00Z",
            "content": "[Breaking news update, published at 11:44 p.m. ET]\r\nThe US Supreme Court has vacated a federal appeals courts stay of execution for Alabama death row prisoner Kenneth Smith, allowing the state to pro… [+6487 chars]"
        }
    ]

    constructor(){
        super();
        this.state = {
           article : this.articles
        }
    }

  render() {
    return (
      <div className="container my-3">
        <h4> News Monkey - Top Headlines </h4>
        <div className="row">
        {this.state.article.map((e) => {
          return <div className="col-md-4 mb-3" key={e.url}>
            <NewsItem
              title={e.title.slice(0,45)}
              description={e.description.slice(0,88)}
              imgUrl={e.urlToImage}
              newsUrl = {e.url}
            />
          </div>

            // console.log(e);
        })}
        </div>
      </div>
    );
  }
}

export default News;
