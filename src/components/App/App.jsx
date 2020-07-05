import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import StartPage from '../StartPage/StartPage.jsx';

const App = () => {
  return(
    <Router>
      <Switch>
        <Route path='/start' exact component={StartPage} />
        <Redirect from="/*" to="/start" />
      </Switch>
    </Router>
  )
}

export default App;
