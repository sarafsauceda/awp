import { combineReducers } from 'redux';
import projectsReducer from './projects';
import robotsReducer from './robots';
import singleRobotReducer from './singleRobot'
import singleProjectReducer from './singleProject'
import createRobotReducer from './createRobot'
import createProjectReducer from './createProject'
import deleteRobotReducer from './deleteRobot'
import deleteProjectReducer from './deleteProject'
import updateRobotReducer from './updateRobot'
import updateProjectReducer from './updateProject'
import setProjectReducer from './project'
import setRobotReducer from './robot'

const appReducer = combineReducers({
  projects: projectsReducer,
  robots: robotsReducer,
  singleRobot: singleRobotReducer,
  singleProject: singleProjectReducer,
  createRobot: createRobotReducer,
  createProject: createProjectReducer,
  deleteRobot: deleteRobotReducer,
  deleteProject: deleteProjectReducer,
  updateRobot: updateRobotReducer,
  updateProject: updateProjectReducer,
  setRobot: setRobotReducer,
  setProject: setProjectReducer

});

export default appReducer;
