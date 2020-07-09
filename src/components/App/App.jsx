import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import StartPage from '../../pages/StartPage/StartPage.jsx';
import GamePage from '../../pages/GamePage/GamePage.jsx';

const App = () => {
  return(
    <Router>
      <Switch>
        <Route path='/start' exact component={StartPage} />
        <Route path='/game' exact component={GamePage} />
        <Redirect from="/*" to="/start" />
      </Switch>
    </Router>
  );
};

export default App;
