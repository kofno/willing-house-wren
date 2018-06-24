import * as React from 'react';
import PositionContext, { Position } from '../PositionContext';
import { ViewPort, ViewPortContext } from '../ViewPortObserver/Types';

interface RenderProps {
  viewport: ViewPort;
  position: Position;
}

interface Props {
  render: (renderContext: RenderProps) => JSX.Element;
}

const RenderContext: React.SFC<Props> = props => {
  return (
    <ViewPortContext.Consumer>
      {viewport => (
        <PositionContext.Consumer>
          {position => props.render({ viewport, position })}
        </PositionContext.Consumer>
      )}
    </ViewPortContext.Consumer>
  );
};

export default RenderContext;
