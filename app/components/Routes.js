import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
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
          <Link to='/'><button type='button'>Home</button></Link>
          <Link to='/robots'><button type='button'>Robots</button></Link>
          <Link to='/projects'><button type='button'>Projects</button></Link>
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
          <div className='list'>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default Routes;
