import React from 'react';
import {connect} from 'react-redux';
import { getSingleProject } from '../redux/singleProject'
import EditProject from './EditProject';
import { Link } from "react-router-dom";
import { deleteProject} from "../redux/deleteProject";


class SingleProject extends React.Component {
  componentDidMount() {
    this.props.getSingleProject(this.props.match.params.projectId);
  }

  render() {
    const { singleProject } = this.props;
    console.log("hiiiijjjji", singleProject);
    return (
      <div>
        <h1>Name: {singleProject.title}</h1>
        <Link to={`/projects/edit/${singleProject.id}`}>
          <h2>(edit)</h2>
        </Link>
        <h2>Title: {singleProject.title}</h2>
        <h2>Deadline:{singleProject.deadline}</h2>
        <h2>Robots(s) Assigned:</h2>
        {/* <img src={singleProject.imageUrl} /> */}
        <button
          type="button"
          className="ms-2 "
          onClick={() =>
            this.props.deleteProject(this.props.match.params.projectId)
          }
        >
          Click to remove X
        </button>
      </div>
    );
  }
}

const mapState = (state) => {
  console.log("singlerobotstate", state);
  return {
    singleProject: state.singleProject,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getSingleProject: (projectId) => dispatch(getSingleProject(projectId)),
  deleteProject: (projectId) => dispatch(deleteProject(projectId)),
});

//     const {singleProject} = this.props;
//     return (
//       <div>
//         <h1>
//       {singleProject.title}
//         </h1>
//         <h2>Description: {singleProject.description}</h2>
//       <h2>Deadline: {singleProject.deadline}</h2>
//       <h2>Priority: {singleProject.priority}</h2>
//       <button type="button" onClick={this.handleClick}>Complete Status</button>
//       <h2>Complete Status: {singleProject.completed ? 'Complete' : 'Incomplete'}</h2>
      
//       {/* <h2>Robot(s) Assigned:{singleProject.robots}</h2> */}
//       </div>
//     )

//     }}

//   const mapState = (state) => {
//       //console.log("state", state);
//       return {
//         singleProject: state.singleProject,
//       };
//     };

// const mapDispatchToProps = (dispatch) => ({
//   getSingleProject: (projectId) => dispatch(getSingleProject(projectId)),
// });

export default (connect(mapState, mapDispatchToProps)(SingleProject));

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