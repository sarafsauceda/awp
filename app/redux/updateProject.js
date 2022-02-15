import axios from "axios";

// action type constants
const UPDATE_PROJECT = "UPDATE_PROJECT";

// action creators
const _updateProject = (project) => {
  return {
    type: UPDATE_PROJECT,
    project,
  };
};

// THUNK CREATORS
export const updateProject = (project, history) => {
  return async (dispatch) => {
    console.log("project inside thunk", project);
    const { data } = await axios.put(`/api/projects/${project.id}`);
    // console.log('data', data)
    dispatch(_updateProject(data));
    history.push("/");
  };
};

//REDUCER FUNCTION
const initialState = [];

export default function updateProjectReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PROJECT:
      return state.map((project) =>
        project.id === action.project.id ? action.project : project
      );
    default:
      return state;
  }
}
