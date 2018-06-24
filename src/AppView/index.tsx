import * as React from 'react';
import Message from '../Message';

const AppView: React.SFC<{}> = props => {
  return (
    <div>
      <div className="appContainer dashedBorder">{props.children}</div>
      <Message name="Foo" />
    </div>
  );
};

export default AppView;
