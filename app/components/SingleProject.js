import React from "react";
import { connect } from "react-redux";
import { getSingleProject } from "../redux/singleProject";
import EditProject from "./EditProject";
import { Link } from "react-router-dom";

class SingleProject extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     completed: false
  //   }
  //   this.handleClick = this.handleClick.bind(this)
  // }

  // handleClick() {
  //   this.setState(prevState => ({completed: !prevState.completed }))
  // }

  componentDidMount() {
    // console.log('text', this.state)
    // console.log('hello', this.props.match.params.projectId)
    this.props.getSingleProject(this.props.match.params.projectId);
  }

  render() {
    const { singleProject } = this.props;
    // const {completed} = this.state
    // console.log('completed', this.state.completed)
    // console.log('hiiiii', singleProject)
    return (
      <div>
        <h1>{singleProject.title}</h1>
        <Link to={`/projects/edit/${singleProject.id}`}>
          <h2>(edit)</h2>
        </Link>
        <h2>Description: {singleProject.description}</h2>
        <h2>Deadline: {singleProject.deadline}</h2>
        <h2>Priority: {singleProject.priority}</h2>
        <button type="button" onClick={this.handleClick}>
          Complete Status
        </button>
        <h2>
          Complete Status: {singleProject.completed ? "Complete" : "Incomplete"}
        </h2>

        {/* <h2>Robot(s) Assigned:{singleProject.robots}</h2> */}
      </div>
    );
  }
}

const mapState = (state) => {
  //console.log("state", state);
  return {
    singleProject: state.singleProject,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getSingleProject: (projectId) => dispatch(getSingleProject(projectId)),
});

export default connect(mapState, mapDispatchToProps)(SingleProject);
