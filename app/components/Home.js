import React from 'react';
import AllRobots from './AllRobots';
import AllProjects from './AllProjects';

const Home = () => {
  return (
    <div className="carousel-wrapper">
        <h1>Welcome! Here are all robots and all projects:</h1>
      <AllRobots />
      <AllProjects />
    </div>
  )
}

export default Home;