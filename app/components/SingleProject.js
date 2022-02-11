import React from 'react';
import {connect} from 'react-redux';
import { getSingleProject } from '../redux/singleProject'

class SingleProject extends React.Component {

  componentDidMount() {
    console.log('text', this.state)
    console.log('hello', this.props.match.params.projectId)
    this.props.getSingleProject(this.props.match.params.projectId);
  }

  render() {
    const {singleProject} = this.props;
    console.log('hiiiii', singleProject)
    return (
      <div>
        <h1>
      {singleProject.title}
        </h1>
        <h2>Description:{singleProject.description}</h2>
      <h2>Deadline:{singleProject.deadline}</h2>
      <h2>Priority:{singleProject.priority}</h2>
      <h2>Complete?{singleProject.completed}</h2>
      {/* <h2>Robot(s) Assigned:{singleProject.robots}</h2> */}
      </div>
    )

    }}

  const mapState = (state) => {
      console.log("state", state);
      return {
        singleProject: state.singleProject,
      };
    };

const mapDispatchToProps = (dispatch) => ({
  getSingleProject: (projectId) => dispatch(getSingleProject(projectId)),
});

export default (connect(mapState, mapDispatchToProps)(SingleProject));