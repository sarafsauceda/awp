import axios from 'axios';

// action type constants
const DELETE_ROBOT = 'DELETE_ROBOT';

// action creators
const _deleteRobot = (id) => {
  // console.log('please work', id)
    return {
      type: DELETE_ROBOT,
      id
    };
  };

  //thunk creator
  export const deleteRobot = (id) => {
    console.log('delete,', id)
    return async (dispatch) => {
      await axios.delete(`/api/robots/${id}`);
      dispatch(_deleteRobot(id));
    };
  };

const initialState = []

//reducer
export default function deleteRobotReducer (state = initialState, action) {
    switch (action.type) {
        case DELETE_ROBOT:
          return state.filter((robot) => robot.id !== action.robotId)
            //return state.filter((robot) => robot.id !== action.robot.id)
            default:
            return state
    }
}
