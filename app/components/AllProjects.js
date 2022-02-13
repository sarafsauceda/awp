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

  componentWillUnmount() {
    this.props.deleteProject(this.props.match.params.projectId)
  }

  render() {
    const { projects } = this.props;
    console.log("allprojects", projects);
    return (
      <div>
        <CreateProject />
        {projects.map((project) => {
          return (
            <div key={project.id}>
              <Link to={`/projects/${project.id}`}>
              <h2>Project Title: {project.title}</h2>
              </Link>
              <div><h3>Project Deadline: {project.deadline}</h3>
              <button
            type='button'
                  className="ms-2 "
                  onClick={() => this.props.deleteProject(this.props.match.params.projectId)}
                >
                  X
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

// const mapState = ({ robots, projects }) => {
//   return {
//   robots,
//   projects,
//   };
//   };
const mapState = (state) => {
  //console.log("state", state);
  return {
    projects: state.projects,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
    deleteProject: (projectId) => dispatch(deleteProject)(projectId)
  };
};

export default connect(mapState, mapDispatch)(AllProjects);
