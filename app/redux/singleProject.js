import axios from 'axios';

//action types
const GET_SINGLE_PROJECT = 'GET_SINGLE_PROJECT';

//action creator
const gotSingleProject = (project) => ({
    type: GET_SINGLE_PROJECT,
    project
  })

export const getSingleProject = (projectId) => {
  return async (dispatch) => {
      // console.log('sfkldfl;', projectId)
    try {
      const {data} = await axios.get(`/api/projects/${projectId}`)
      dispatch(gotSingleProject(data))
    } catch (err) {
      console.log(err)
    }
  }
};

const initialState = {}

export default function singleProjectReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_PROJECT:
      return action.project
    default:
      return state;
  }
}
