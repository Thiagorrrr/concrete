import React, { Component } from 'react';
import Search from '../molecules/search';
import Results from '../molecules/results';
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch, Redirect } from 'react-router';
class App extends Component {

  render() {

    return (
      <div className="content">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/results" component={Results} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
export default App;