import * as React from 'react';
import Message from '../Message';
import PositionContext from '../PositionContext';

const Footer: React.SFC<{}> = () => {
  return (
    <div className="dashedBorder">
      <PositionContext.Provider value={{ kind: 'footer' }}>
        <Message name="Rick" />
      </PositionContext.Provider>
    </div>
  );
};

export default Footer;
