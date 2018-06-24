import * as React from 'react';
import { ViewPort, ViewPortContext } from '../ViewPortObserver/Types';
import BodyImpl from './BodyImpl';

const className = (viewport: ViewPort) => {
  switch (viewport.type) {
    case 'mobile':
      return 'mobileBody';
    case 'desktop':
      return 'desktopBody';
  }
};

const Body: React.SFC<{}> = () => {
  return (
    <ViewPortContext.Consumer>
      {viewport => <BodyImpl className={className(viewport)} />}
    </ViewPortContext.Consumer>
  );
};

export default Body;
