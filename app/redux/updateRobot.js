import axios from 'axios';

// action type constants
const UPDATE_ROBOT = 'UPDATE_ROBOT';

// action creators

const _updateRobot = (robot) => {
    return {
      type: UPDATE_ROBOT,
      robot
    };
  };

  // THUNK CREATORS
  export const updateRobot = (robot, history) => {
    return async (dispatch) => {
      const { data: updated } = await axios.put(`/api/robots/${robot.id}`, robot);
      dispatch(_updateRobot(updated));
      history.push('/');
    };
  };

  //REDUCER FUNCTION
  initialState = []

  export default function updaterobotsReducer (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_ROBOT:
        return state.map((robot) =>
        robot.id === action.robot.id ? action.robot : robot
      );
      default:
      return state
  }
  }