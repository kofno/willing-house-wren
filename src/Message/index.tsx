import * as React from 'react';
import RenderContextMessage from '../RenderContextMessage';

interface Props {
  name: string;
}

const Message: React.SFC<Props> = props => {
  return (
    <div>
      <div>Message Component: Hello, {props.name}.</div>
      <RenderContextMessage />
    </div>
  );
};

export default Message;
