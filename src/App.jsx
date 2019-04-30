import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, hashHistory } from 'react-router-dom';

import Search from './Search.jsx';
import Saved_Recipes from './Saved.jsx';

var contentNode = document.getElementById("contents");

const NoMatch = () => (
<div className='container'>
  <h2>Error 404</h2>
  <p>Page Not Found</p>
</div>
);

// The "routed app" that defines the different routes that
// are supposed in this application. As you can see, If the
// URL path is '/' we will render the IssueList component,
// if the path is '/issues/:id' we render the IssueEdit component,
// and if we get anything else we render the NoMatch view.
// This router uses the "hash history" approach to implement
// single-page apps with multiple views.
// const RoutedApp = () => (
//   <Router history={hashHistory} >
//     <Redirect from="/" to="/index" />
//     <Route path="/index" component={Search} />
//     {/* <Route path="/saved" component={Saved_Recipes} /> */}
//     <Route path="*" component={NoMatch} />
//   </Router>);

// This renders the JSX router inside the content node:
ReactDOM.render(
<BrowserRouter history={hashHistory} >
  <Switch>
    <Route exact path="/" component={Search} />
    <Route exact path="/saved" component={Saved_Recipes} />
    <Route path="*" component={NoMatch} />
  </Switch>
</BrowserRouter>, contentNode
);