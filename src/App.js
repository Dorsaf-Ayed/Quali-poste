import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Todo from './Todo'
import CreateTodo from './CreateTodo';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Todo" component={Todo} />
        <Route exact path="/CreateTodo" component={CreateTodo} />
      </Switch>
    </Router>
    
  );
};

export default App;