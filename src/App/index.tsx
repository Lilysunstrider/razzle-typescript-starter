import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import 'antd/dist/antd.css';
import Home from '@/views/Home';
import '@/i18n.ts';
import './App.scss';

const App = () => {
  useEffect(() => {
    console.log('on load');
  });

  return (
    <>
      <Helmet>
        <title>Title</title>
      </Helmet>
      <Home />
    </>
  );
};

export default App;
