// import axios from 'axios';

// // action type constants
// const DELETE_ROBOT = 'DELETE_ROBOT';

// // action creators
// const _deleteRobot = (robot) => {
//     return {
//       type: DELETE_ROBOT,
//       robot
//     };
//   };

//   //thunk creator
//   export const deleteRobot = (id, history) => {
//     return async (dispatch) => {
//       const {data: robot} = await axios.delete(`/api/robots/${id}`);
//       dispatch(_deleteRobot(robot));
//       history.push('/');
//     };
//   };

// const initialState = []

// //reducer
// export default function deleteRobotReducer (state = initialState, action) {
//     switch (action.type) {
//         case DELETE_ROBOT:
//             return state.filter((robot) => robot.id !== action.robot.id)
//             default:
//             return state
//     }
// }
