import axios from "axios";

// action type constants
const CREATE_PROJECT = "CREATE_PROJECT";

//action creator
const _createProject = (project) => {
  return {
    type: CREATE_PROJECT,
    project,
  };
};

export const createProject = (project) => {
  return async (dispatch) => {
    const { data: created } = await axios.post('/api/projects', project);
    dispatch(_createProject(created));
    // history.push("/");
  };
};

const initialState = [];

export default function createProjectReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_PROJECT:
      return action.project;
    default:
      return state;
  }
}
