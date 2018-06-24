import * as React from 'react';
import AppView from '../AppView';
import Body from '../Body';
import Footer from '../Footer';
import Navigation from '../Navigation';

const Demo: React.SFC<{}> = () => {
  return (
    <AppView>
      <Navigation />
      <Body />
      <Footer />
    </AppView>
  );
};

export default Demo;
