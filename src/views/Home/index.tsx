import React from 'react';
import './Home.scss';
import { useRouteMatch } from 'react-router';

const Home = () => {
    const { path } = useRouteMatch();
    return <div>home</div>;
};

export default Home;
