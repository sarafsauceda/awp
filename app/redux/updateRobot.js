import axios from "axios";

// action type constants
const UPDATE_ROBOT = "UPDATE_ROBOT";

// action creators
const _updateRobot = (robot) => {
  return {
    type: UPDATE_ROBOT,
    robot,
  };
};

// THUNK CREATORS
export const updateRobot = (robot, history) => {
  return async (dispatch) => {
    const { data } = await axios.put(`/api/robots/${robot.id}`);
    // console.log(data)
    dispatch(_updateRobot(data));
    history.push("/");
  };
};

//REDUCER FUNCTION
const initialState = [];

export default function updateRobotReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ROBOT:
      return state.map((robot) =>
        robot.id === action.robot.id ? action.robot : robot
      );
    default:
      return state;
  }
}
