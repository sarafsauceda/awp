import React, { Component } from "react";
import { createRobot } from "../redux/createRobot";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class CreateRobot extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createRobot({ ...this.state });
  }

  render() {
    const { name } = this.state;
   // console.log('name', this.state)
    const { handleSubmit, handleChange } = this;
    console.log('sara');
    return (
      <form id="robot-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Add New Robot:</label>
        <input name="name" onChange={handleChange} value={name} />
        <button type="submit">Submit</button>
        <Link to="/">Cancel</Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    createRobot: (robot) => dispatch(createRobot(robot)),
});

export default connect(null, mapDispatchToProps)(CreateRobot);
