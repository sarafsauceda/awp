import axios from 'axios';

//action types
const GET_SINGLE_ROBOT = 'GET_SINGLE_ROBOT';

//action creator
const gotSingleRobot = (robot) => {
  return {
    type: GET_SINGLE_ROBOT,
    robot,
  };
};

export const getSingleRobot = (id) => async (dispatch) => {
  const { data } = await axios.get(`/api/robots/${id}`);
  dispatch(gotSingleRobot(data));
};

export default function singlRobotReducer(state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_ROBOT:
      return action.robot;
    default:
      return state;
  }
}
