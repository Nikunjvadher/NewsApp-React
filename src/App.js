import React from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import { useState } from 'react';


const App = () => {
  const pageSize = 30;
  const country = "in";
  const apiKey = "fc127c7be20d4f0b9e8acf1a9fbd0988";

  const [ progress , setProgress ] = useState(0) 

    return (
      <Router>
          <Navbar/> 
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Routes>
          <Route exact path='/'               element={<News  setProgress={setProgress} apikey={apiKey}  pageSize={pageSize} country={country} key='general'       category="general" />}></Route>
          <Route exact path='/business'       element={<News  setProgress={setProgress} apikey={apiKey}  pageSize={pageSize} country={country} key='business'      category="business" />}></Route>
          <Route exact path='/entertainment'  element={<News  setProgress={setProgress} apikey={apiKey}  pageSize={pageSize} country={country} key='entertainment' category="entertainment" />}></Route>
          <Route exact path='/health'         element={<News  setProgress={setProgress} apikey={apiKey}  pageSize={pageSize} country={country} key='health'        category="health" />}></Route>
          <Route exact path='/science'        element={<News  setProgress={setProgress} apikey={apiKey}  pageSize={pageSize} country={country} key='science'       category="science" />}></Route>
          <Route exact path='/sports'         element={<News  setProgress={setProgress} apikey={apiKey}  pageSize={pageSize} country={country} key='sports'        category="sports" />}></Route>
          <Route exact path='/technology '    element={<News  setProgress={setProgress} apikey={apiKey}  pageSize={pageSize} country={country} key='technology'    category="technology" />}></Route>
          </Routes>
      </Router>
    )
}

export default App;