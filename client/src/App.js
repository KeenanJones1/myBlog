import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './hocs/Layout'
import Blog from './components/Blog'
import PostDetails from './components/PostDetails'
import Category from './components/Category'


function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Blog}/>
          <Route exact path="/posts/:id" component={PostDetails}/>
          <Route exact path="/category/:id" component={Category}/>
        </Switch>
      </Layout>
    </Router>
  );
}



export default App;