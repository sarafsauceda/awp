import axios from 'axios';

// action type constants
const DELETE_PROJECT = 'DELETE_PROJECT';

// action creators
const _deleteProject = (id) => {
//   console.log('please work', id)
    return {
      type: DELETE_PROJECT,
      id
    };
  };

  //thunk creator
  export const deleteProject = (id) => {
    // console.log('delete,', id)
    return async (dispatch) => {
      await axios.delete(`/api/projects/${id}`);
      dispatch(_deleteProject(id));
    };
  };

const initialState = []

//reducer
export default function deleteProjectReducer (state = initialState, action) {
    switch (action.type) {
        case DELETE_PROJECT:
          return state.filter((project) => project.id !== action.robotId)
            default:
            return state
    }
}