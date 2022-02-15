import axios from "axios";

const SET_ROBOT = "SET_ROBOT";

export const _setRobot = (robot) => {
  return {
    type: SET_ROBOT,
    robot,
  };
};

export const fetchRobot = (id) => {
  return async (dispatch) => {
    const { data: robot } = await axios.get(`/api/robots/${id}`);
    dispatch(_setRobot(robot));
  };
};

export default function setProjectReducer(state = {}, action) {
  switch (action.type) {
    case SET_ROBOT:
      return action.robot;
    default:
      return state;
  }
}
