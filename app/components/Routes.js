import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import AllRobots from './AllRobots';
import AllProjects from './AllProjects';
import SingleRobot from './SingleRobot';
import SingleProject from './SingleProject';
import CreateRobot from './CreateRobot'
import CreateProject from './CreateProject'
import EditRobot from './EditRobot'

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>Welcome!
          <Link to='/robots'>Robots</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/robots/new/create'>Create A New Robot</Link>
          <Link to='/projects/new/create'>Create A New Project</Link>
        </nav>
        <main>
          <div>
            <Switch>
            <Route exact path='/robots' component={AllRobots} />
            
            <Route exact path='/projects' component={AllProjects} />
            <Route exact path='/robots/:robotId' component={SingleRobot} />
            <Route exact path='/robots/:robotId' component={EditRobot} />
            {/* <Route exact path='/robots' component={EditRobot} /> */}
            <Route exact path='/projects/:projectId' component={SingleProject} />
            <Route exact path='/robots' component={CreateRobot} />
            <Route exact path='/projects' component={CreateProject} />
            </Switch>
          </div>
          {/* <h1>
            Welcome to StackBot Project Management: your robot employees are
            awaiting assignments!
          </h1> */}
          {/* <p>This seems like a nice place to get started with some Routes!</p> */}
          <div className='list'>
            <AllProjects />
            <AllRobots />
            {/* <CreateProject />
            <CreateRobot /> */}
          </div>
        </main>
      </div>
    </Router>
  );
};

export default Routes;
