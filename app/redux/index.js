import { combineReducers } from 'redux';
import restaurantsReducer from './restaurants';
import neighborhoodsReducer from './neighborhoods';

const appReducer = combineReducers({
  neighborhoods: neighborhoodsReducer,
  restaurants: restaurantsReducer,

});

export default appReducer;
