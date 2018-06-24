import * as React from 'react';
import PositionContext from '../PositionContext';

const MainPanel: React.SFC<{}> = props => {
  return (
    <div className="dashedBorder">
      <PositionContext.Provider value={{ kind: 'main' }}>{props.children}</PositionContext.Provider>
    </div>
  );
};

export default MainPanel;
