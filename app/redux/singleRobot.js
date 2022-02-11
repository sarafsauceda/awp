import axios from 'axios';

//action types
const GET_SINGLE_ROBOT = 'GET_SINGLE_ROBOT';

//action creator
const gotSingleRobot = (robot) => ({
    type: GET_SINGLE_ROBOT,
    robot
  })

export const getSingleRobot = (robotId) => {
  return async (dispatch) => {
    console.log('hhhhh', robotId)
    try {
      const {data} = await axios.get(`/api/robots/${robotId}`)
      console.log('data',data)
      dispatch(gotSingleRobot(data))
    } catch (err) {
      console.log(err)
    }
  }
};

const initialState = {}

export default function singleRobotReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_ROBOT:
      return action.robot
    default:
      return state;
  }
}
