import axios from 'axios'

//action types
const SET_ROBOTS = 'SET_ROBOTS'

//action creator
export const setRobots = (robots) => ({
  //return {
    type: SET_ROBOTS,
    robots
  //}
});

//thunk creator
export const fetchRobots = () => async (dispatch) => {
  const {data} = await axios.get('/api/robots');
  dispatch(setRobots(data));
}

// export const fetchRobots = () => {
//   return async (dispatch) => {
//     try {
//       const {data} = await axios.get('/api/robots')
//       dispatch(setRobots(data))
//     } catch (err) {
//       console.log(err)
//     }
//   }
// };

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
const initialState = {
  robots: []
}

// export const robotsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_ROBOTS:
//       return {...state, allRobots: action.robots};
//     default:
//     return state
// }
// }

export default function robotsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ROBOTS:
      return {
        ...state,
        robots: action.robots,
      }
      default:
      return state
  }
}
