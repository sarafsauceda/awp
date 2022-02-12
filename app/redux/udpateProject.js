// import axios from 'axios';

// // action type constants
// const UPDATE_PROJECT = 'UPDATE_PROJECT';

// // action creators

// const _updateProject = (project) => {
//     return {
//       type: UPDATE_PROJECT,
//       project
//     };
//   };

//   // THUNK CREATORS
//   export const updateProject = (project, history) => {
//     return async (dispatch) => {
//       const { data: updated } = await axios.put(`/api/projects/${project.id}`, project);
//       dispatch(_updateProject(updated));
//       history.push('/');
//     };
//   };

//   //REDUCER FUNCTION
//   initialState = []

//   export default function updateProjectReducer (state = initialState, action) => {
//     switch (action.type) {
//       case UPDATE_PROJECT:
//         return state.map((project) =>
//         project.id === action.project.id ? action.project : project
//       );
//       default:
//       return state
//   }
//   }