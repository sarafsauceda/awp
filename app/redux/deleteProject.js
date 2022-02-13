import axios from 'axios';

// action type constants
const DELETE_PROJECT = 'DELETE_PROJECT';

// action creators
const _deleteProject = (project) => {
    return {
      type: DELETE_PROJECT,
      project
    };
  };

  export const deleteProject = (projectId, history) => {
    return async (dispatch) => {
      const {data: project} = await axios.delete(`/api/projects/${projectId}`);
      dispatch(_deleteProject(project));
      history.push('/');
    };
  };

 const initialState = []

//reducer
export default function deleteProjectReducer (state = initialState, action) {
    switch (action.type) {
        case DELETE_PROJECT:
            return state.filter((project) => project.id !== action.project.id)
            default:
            return state
    }
}