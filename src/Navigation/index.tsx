import * as React from 'react';
import Message from '../Message';
import PositionContext from '../PositionContext';

const Navigation: React.SFC<{}> = () => {
  return (
    <div className="dashedBorder">
      <PositionContext.Provider value={{ kind: 'nav' }}>
        <Message name="Steve" />
      </PositionContext.Provider>
    </div>
  );
};

export default Navigation;
