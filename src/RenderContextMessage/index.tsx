import * as React from 'react';
import { Position } from '../PositionContext';
import RenderContext from '../RenderContext';
import { ViewPort } from '../ViewPortObserver/Types';

const renderContextMessage = (position: Position): JSX.Element => {
  switch (position.kind) {
    case 'nav':
      return <h1>I'm in the navigation</h1>;
    case 'footer':
      return <h6>I'm in the footer</h6>;
    case 'side':
      return <span>I'm in the side bar</span>;
    case 'main':
      return <p>I'm in the main content part of the body</p>;
    case 'none':
      return <span>I don't know where I am...</span>;
  }
};

const renderViewportMessage = (viewport: ViewPort): JSX.Element => {
  switch (viewport.type) {
    case 'desktop':
      return <em>Desktop</em>;
    case 'mobile':
      return <strong>Mobile</strong>;
  }
};

const RenderContextMessage: React.SFC<{}> = () => {
  return (
    <RenderContext
      render={renderContext => (
        <div>
          <div>{renderContextMessage(renderContext.position)}</div>
          <div>{renderViewportMessage(renderContext.viewport)}</div>
        </div>
      )}
    />
  );
};

export default RenderContextMessage;
