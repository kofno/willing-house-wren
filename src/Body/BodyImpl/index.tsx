import * as React from 'react';
import MainPanel from '../../MainPanel';
import Message from '../../Message';
import Sidebar from '../../Sidebar';

interface Props {
  className: string;
}

const Body: React.SFC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <MainPanel>
        <Message name="Ryan" />
      </MainPanel>
      <Sidebar>
        <Message name="Mark" />
      </Sidebar>
    </div>
  );
};

export default Body;
