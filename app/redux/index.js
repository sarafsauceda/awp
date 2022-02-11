import { combineReducers } from 'redux';
import projectsReducer from './projects';
import robotsReducer from './robots';
import singleRobotReducer from './singleRobot'
import singleProjectReducer from './singleProject'
import createRobotReducer from './createRobot'

const appReducer = combineReducers({
  projects: projectsReducer,
  robots: robotsReducer,
  singleRobot: singleRobotReducer,
  singleProject: singleProjectReducer,
  createRobot: createRobotReducer
});

export default appReducer;
