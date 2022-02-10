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
            <Switch>
            <Route exact path='/robots' component={AllRobots} />
            <Route exact path='/projects' component={AllProjects} />
            </Switch>
          </div>
          <h1>
            Welcome to StackBot Project Management: your robot employees are
            awaiting assignments!
          </h1>
          <p>This seems like a nice place to get started with some Routes!</p>
          <div className='list'>
            {/* <AllProjects /> */}
          </div>
        </main>
        
      </div>
    </Router>
  );
};

export default Routes;
