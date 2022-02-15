import axios from "axios";

// action type constants
const DELETE_ROBOT = "DELETE_ROBOT";

// action creators
const _deleteRobot = (id) => {
  return {
    type: DELETE_ROBOT,
    id,
  };
};

//thunk creator
export const deleteRobot = (id) => {
  return async (dispatch) => {
    const { data } = await axios.delete(`/api/robots/${id}`);
    console.log("data", data);
    dispatch(_deleteRobot(data));
  };
};

const initialState = [];

//reducer
export default function deleteRobotReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_ROBOT:
      return state.filter((robot) => robot.id !== action.robotId);
    default:
      return state;
  }
}
