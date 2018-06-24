import * as React from 'react';
import PositionContext from '../PositionContext';

const Sidebar: React.SFC<{}> = props => {
  return (
    <div className="dashedBorder">
      <PositionContext.Provider value={{ kind: 'side' }}>{props.children}</PositionContext.Provider>
    </div>
  );
};

export default Sidebar;
