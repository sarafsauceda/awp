import axios from 'axios';

const SET_PROJECT = 'SET_PROJECT';

export const _setProject = (project) => {
  return {
    type: SET_PROJECT,
    project
  };
};

export const fetchProject = (id) => {
  console.log('id', id)
  return async (dispatch) => {
    const { data: project } = await axios.get(`/api/projects/${id}`);
    console.log('projects..', project)
    dispatch(_setProject(project));
  };
};

export default function setProjectReducer (state = {}, action) {
  switch (action.type) {
    case SET_PROJECT:
      return action.project;
    default:
      return state;
  }
}
