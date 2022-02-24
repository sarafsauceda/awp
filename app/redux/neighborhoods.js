import axios from "axios";

//action types
const SET_NEIGHBORHOODS = 'SET_NEIGHBORHOODS';
const CREATE_NEIGHBORHOOD = 'CREATE_NEIGHBORHOOD';

//action creator
export const setNeighborhoods = (neighborhoods) => {
  return {
    type: SET_NEIGHBORHOODS,
    neighborhoods,
  };
};

const _createNeighborhood = (neighborhood) => {
  return {
    type: CREATE_NEIGHBORHOOD,
    neighborhood,
  };
};
//thunk creator

export const fetchNeighborhoods = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/neighborhoods');
      dispatch(setNeighborhoods(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const createNeighborhood = (neighborhood) => {
  console.log("wuoer", neighborhood);
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/neighborhoods', neighborhood);
      console.log("lkkkk", data);
      dispatch(_createNeighborhood(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = [];

export default function neighborhoodsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NEIGHBORHOODS:
      return action.neightborhoods;
    case CREATE_NEIGHBORHOOD:
      return [...state, action.neighborhood]
    default:
      return state;
  }
}
