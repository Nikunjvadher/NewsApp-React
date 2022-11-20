import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';


export default class App extends Component {
  pageSize = 30;
  country = "in";
  apiKey = "fc127c7be20d4f0b9e8acf1a9fbd0988"
  state = {
    progress: 0,
  }
  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
      <Router>
          <Navbar/> 
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
          <Route exact path='/'               element={<News  setProgress={this.setProgress} apikey={this.apikey}  pageSize={this.pageSize} country={this.country} key='general'       category="general" />}></Route>
          <Route exact path='/business'       element={<News  setProgress={this.setProgress} apikey={this.apiKey}  pageSize={this.pageSize} country={this.country} key='business'      category="business" />}></Route>
          <Route exact path='/entertainment'  element={<News  setProgress={this.setProgress} apikey={this.apiKey}  pageSize={this.pageSize} country={this.country} key='entertainment' category="entertainment" />}></Route>
          <Route exact path='/health'         element={<News  setProgress={this.setProgress} apikey={this.apiKey}  pageSize={this.pageSize} country={this.country} key='health'        category="health" />}></Route>
          <Route exact path='/science'        element={<News  setProgress={this.setProgress} apikey={this.apiKey}  pageSize={this.pageSize} country={this.country} key='science'       category="science" />}></Route>
          <Route exact path='/sports'         element={<News  setProgress={this.setProgress} apikey={this.apiKey}  pageSize={this.pageSize} country={this.country} key='sports'        category="sports" />}></Route>
          <Route exact path='/technology '    element={<News  setProgress={this.setProgress} apikey={this.apiKey}  pageSize={this.pageSize} country={this.country} key='technology'    category="technology" />}></Route>
          </Routes>
      </Router>
    )
  }
}

