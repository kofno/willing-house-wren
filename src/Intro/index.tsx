import * as React from 'react';
import { Link } from 'react-router-dom';

const Intro: React.SFC<{}> = () => {
  return (
    <div>
      <h3>
        This is the root path. Go to the <Link to="/demo">demo</Link>
      </h3>
    </div>
  );
};

export default Intro;
