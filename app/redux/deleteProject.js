import axios from 'axios';

// action type constants
const DELETE_PROJECT = 'DELETE_PROJECT';

// action creators
const _deleteProject = (id) => {
    return {
      type: DELETE_PROJECT,
      id
    };
  };

  //thunk creator
  export const deleteProject = (id) => {
    return async (dispatch) => {
      const {data} = await axios.delete(`/api/projects/${id}`);
      dispatch(_deleteProject(data));
    };
  };

const initialState = []

//reducer
export default function deleteProjectReducer (state = initialState, action) {
    switch (action.type) {
        case DELETE_PROJECT:
          return state.filter((project) => project.id !== action.projectId)
            default:
            return state
    }
}