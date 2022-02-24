import React, { Component } from "react";
import { createRestaurant } from "../redux/restaurants";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class CreateRestaurant extends React.Component {
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
    this.props.createRestaurant({ ...this.state });
  }

  render() {
    const { name } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <form id="restaurant-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Where to next?</label>
        <input name="name" onChange={handleChange} value={name} />
        <button type="submit">Add new restaurant</button>
        <Link to='https://www.yelp.com/'>
        <button type='button'>I need Inspiration</button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createRestaurant: (restaurant) => dispatch(createRestaurant(restaurant)),
});

export default connect(null, mapDispatchToProps)(CreateRestaurant);
