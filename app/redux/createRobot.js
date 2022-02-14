import axios from 'axios';

// action type constants
const CREATE_ROBOT = 'CREATE_ROBOT';

// action creators
const _createRobot = (robot) => {
    console.log('herr', robot)
  return {
    type: CREATE_ROBOT,
    robot
  };
};

// THUNK CREATORS

export const createRobot = (robot) => {
    console.log('wuoer', robot)
  return async (dispatch) => {
      try {
    const { data } = await axios.post('/api/robots', robot);
    console.log('lkkkk', data)
    dispatch(_createRobot(data));
  } catch (err) {
      console.log(err)
  }
};
}

//reducer function

const initialState = []

export default function createRobotReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_ROBOT:
      return action.robot
    default:
      return state;
  }
}