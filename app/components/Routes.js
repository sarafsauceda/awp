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
import EditProject from './EditProject'
// import NotFound from './NotFound';
import Home from './Home'

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>Welcome!
          <Link to='/'>Home</Link>
          <Link to='/robots'>Robots</Link>
          <Link to='/projects'>Projects</Link>
        </nav>
        <main>
          <div>
            <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/robots' component={AllRobots} />
            
            <Route exact path='/projects' component={AllProjects} />
            <Route exact path='/robots/:robotId' component={SingleRobot} />
            <Route exact path='/robots/:robotId' component={EditRobot} />
            {/* <Route exact path='/robots' component={EditRobot} /> */}
            <Route exact path='/projects/:projectId' component={SingleProject} />
            <Route exact path='/robots' component={CreateRobot} />
            <Route exact path='/projects' component={CreateProject} />
            <Route path='/robots/edit/:id' component={EditRobot} />
            <Route path='/projects/edit/:id' component={EditProject} />
            {/* <Route component={NotFound} /> */}
            </Switch>
          </div>
          {/* <h1>
            Welcome to StackBot Project Management: your robot employees are
            awaiting assignments!
          </h1> */}
          {/* <p>This seems like a nice place to get started with some Routes!</p> */}
          <div className='list'>
            {/* <AllProjects />
            <AllRobots /> */}
            {/* <Home /> */}
            {/* <CreateProject />
            <CreateRobot /> */}
          </div>
        </main>
      </div>
    </Router>
  );
};

export default Routes;
