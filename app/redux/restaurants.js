import axios from "axios";

//action types
const SET_RESTAURANTS = 'SET_RESTAURANTS';
const CREATE_RESTAURANT = 'CREATE_RESTAURANT';

//action creator
export const setRestaurants = (restaurants) => {
  return {
    type: SET_RESTAURANTS,
    restaurants,
  };
};

const _createRestaurant = (restaurant) => {
  // console.log("herr", restaurant);
  return {
    type: CREATE_RESTAURANT,
    restaurant,
  };
};
//thunk creator

export const fetchRestaurants = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/restaurants');
      dispatch(setRestaurants(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const createRestaurant = (restaurant) => {
  console.log("wuoer", restaurant);
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/restaurants', restaurant);
      console.log("lkkkk", data);
      dispatch(_createRestaurant(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = [];

export default function restaurantsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_RESTAURANTS:
      return action.restaurants;
    case CREATE_RESTAURANT:
      return [...state, action.restaurant]
    default:
      return state;
  }
}
