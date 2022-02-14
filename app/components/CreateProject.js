import React, { Component } from "react";
import { createProject } from "../redux/createProject";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class CreateProject extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.title]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createProject({ ...this.state });
  }

  render() {
    const { title } = this.state;
    //console.log('title', title)
    const { handleSubmit, handleChange } = this;
    //console.log('sara', this.state);
    return (
      <form id="project-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Add New Project:</label>
        <input title="title" onChange={handleChange} value={title} />
        <button type="submit">Submit</button>
        <Link to="/">Cancel</Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    createProject: (project) => dispatch(createProject(project)),
});

export default connect(null, mapDispatchToProps)(CreateProject);
