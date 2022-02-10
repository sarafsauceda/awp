import React from "react";
import { connect } from "react-redux";
import { fetchProjects } from "../redux/projects";

// Notice that we're exporting the AllProjects component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllProjects extends React.Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    const { projects } = this.props;
    console.log('projects', projects)
    return (
      <div>
          {projects.map((project) => {
            return (
            <div key={project.id}>
              <h1>{project.title}</h1>
              <div>{project.deadline}</div>
            </div>
    )})}
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
