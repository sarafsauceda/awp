import axios from 'axios'

const FETCH_SINGLE_ROBOT = 'FETCH_SINGLE_ROBOT';
const _fetchSingleRobot = (robot) => {
  return {
    type: FETCH_SINGLE_ROBOT,
    robot,
  };
};

export const fetchSingleRobot = (id) => {
  return async (dispatch) => {
    const { data: robot } = await axios.get(`/api/robots/${id}`);
    dispatch(_fetchSingleRobot(robot));
  };
};

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SINGLE_ROBOT:
      return action.robot;
    default:
      return state;
  }
};
