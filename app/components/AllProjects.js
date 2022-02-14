import React from "react";
import { connect } from "react-redux";
import { fetchProjects } from "../redux/projects";
import { Link } from "react-router-dom";
import CreateProject from "./CreateProject";
import { deleteProject } from '../redux/deleteProject'

// Notice that we're exporting the AllProjects component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllProjects extends React.Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    const { projects } = this.props;
    console.log("allprojects", projects);
    return (
      <div>
        <CreateProject />
        <h1><b>Projects:</b></h1>
        {projects.map(( { id, title, deadline }) => (
            <div key={id}>
              <Link to={`/projects/${id}`}>
              <h2>Project Title: {title}</h2>
              </Link>
              <h3>Project Deadline: {deadline}</h3>
              <button
            type="button"
                  className="ms-2 "
                  onClick={() => this.props.deleteProject(id)}
                >
                  X
              </button>
            </div>
        ))}
      </div>
        )}}

const mapState = (state) => {
  return {
    projects: state.projects,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
    deleteProject: (id) => dispatch(deleteProject)(id)
  };
};

export default connect(mapState, mapDispatch)(AllProjects);
