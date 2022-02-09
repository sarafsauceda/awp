import axios from 'axios'

const SET_PROJECTS = 'SET_PROJECTS'

export const setProjects = (projects) => {
  return {
    type: SET_PROJECTS,
    projects
  }
};

export const fetchProjects = () => {};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function projectsReducer() {
  return null;
}
