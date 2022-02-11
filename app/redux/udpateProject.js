import axios from 'axios';

// action type constants
const UPDATE_ROBOT = 'UPDATE_ROBOT';

// action creators

const _updateProject = (todo) => {
    return {
      type: UPDATE_TODO,
      todo
    };
  };

  // THUNK CREATORS
  export const updateTodo = (todo, history) => {
    return async (dispatch) => {
      const { data: updated } = await axios.put(`/api/todos/${todo.id}`, todo);
      dispatch(_updateTodo(updated));
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