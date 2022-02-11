import axios from "axios";

// action type constants
const CREATE_ROBOT = "CREATE_ROBOT";

// action creators
const _createRobot = (robot) => {
  return {
    type: CREATE_ROBOT,
    robot
  };
};

// THUNK CREATORS

export const createRobot = (robot, history) => {
    console.log('robots!!!' , robot)
  return async (dispatch) => {
    const { data: created } = await axios.post('/api/robots', robot);
    dispatch(_createRobot(created));
    history.push('/');
  };
};


const initialState = []

export default function createRobotReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_ROBOT:
      return action.robot
    default:
      return state;
  }
}

