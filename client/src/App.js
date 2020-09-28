import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Home  from './components/Home.js'





function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}



export default App;