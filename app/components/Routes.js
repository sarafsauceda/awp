import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import AllRobots from './AllRobots';
import AllProjects from './AllProjects';

const Routes = () => {
  return (
    <Router>
     
      <div>
        <nav>Welcome!
          <Link to='/robots'>Robots</Link>
          <Link to='/projects'>Projects</Link>
        </nav>
        <main>
          <div>
            <Route path='/robots' component={Robot} />
            <Route path='/projects' component={Project} />
          </div>
          <h1>
            Welcome to StackBot Project Management: your robot employees are
            awaiting assignments!
          </h1>
          <p>This seems like a nice place to get started with some Routes!</p>
        </main>
      </div>
    </Router>
  );
};

export default Routes;
