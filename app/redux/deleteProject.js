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

  export const deleteProject = (id, history) => {
    return async (dispatch) => {
      const {data: project} = await axios.delete(`/api/projects/${id}`);
      dispatch(_deleteProject(project));
      history.push('/');
    };
  };

 const initialState = []

 case DELETE_PROJECT:
      return state.filter((project) => project.id !== action.project.id);
