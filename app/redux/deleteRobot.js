// import axios from 'axios';

// // action type constants
// const DELETE_ROBOT = 'DELETE_ROBOT';

// // action creators
// const _deleteRobot = (robotId) => {
//   console.log('please work', robotId)
//     return {
//       type: DELETE_ROBOT,
//       robotId
//     };
//   };

//   //thunk creator
//   // export const deleteRobot = (robotId, history) => {
//   //   console.log('robotid', robotId)
//   //   return async (dispatch) => {
//   //     const {data} = await axios.delete(`/api/robots/${id}`);
//   //     console.log('theeh', data)
//   //     dispatch(_deleteRobot(data));
//   //     history.push('/');
//   //   };
//   // };

//   export const deleteRobot = (robotId) => {
//     console.log('pkease', robotId)
//     return async (dispatch) => {
//       await axios.delete(`/api/robots/${robotId}`);
//       dispatch(_deleteRobot(robotId));
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
