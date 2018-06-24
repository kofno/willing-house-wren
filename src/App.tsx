import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Demo from './Demo';
import Intro from './Intro';
import ViewPortObserver from './ViewPortObserver';

class App extends React.Component {
  public render() {
    return (
      <ViewPortObserver>
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={Intro} />
            <Route exact={true} path="/demo" component={Demo} />
          </Switch>
        </BrowserRouter>
      </ViewPortObserver>
    );
  }
}

export default App;
