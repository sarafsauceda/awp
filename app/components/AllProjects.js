import React from "react";
import { connect } from "react-redux";
import { fetchProjects } from "../redux/projects";
import { Link } from "react-router-dom";
import CreateProject from "./CreateProject";

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
        {projects.map((project) => {
          return (
            <div key={project.id}>
              <Link to={`/projects/${project.id}`}>
              <h2>Project Title: {project.title}</h2>
              </Link>
              <div><h3>Project Deadline: {project.deadline}</h3>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    projects: state.projects,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
  };
};

export default connect(mapState, mapDispatch)(AllProjects);
