import * as React from 'react';
import { fromEvent, Subscription } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';
import { ViewPort, viewPort, ViewPortContext, windowDimensions } from './Types';

interface Props {}

interface State {
  viewport: ViewPort;
}

class ViewPortObserver extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      viewport: viewPort(windowDimensions(window)),
    };
  }

  componentDidMount() {
    this.resizings = fromEvent(window, 'resize')
      .pipe(throttleTime(250), map(_ => window), map(windowDimensions), map(viewPort))
      .subscribe(viewport => this.setState({ viewport }));
  }

  componentWillUnmount() {
    this.resizings && this.resizings.unsubscribe();
  }

  render() {
    return (
      <ViewPortContext.Provider value={this.state.viewport}>
        {this.props.children}
      </ViewPortContext.Provider>
    );
  }

  private resizings: Subscription;
}

export default ViewPortObserver;
