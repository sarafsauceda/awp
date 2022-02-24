import React from "react";
import { connect } from "react-redux";
import { fetchRestaurants } from "../redux/restaurants";
import { Link } from "react-router-dom";
import CreateRestaurant from "./AddRestaurant";
// import EditRestaurant from "./EditRestaurant";
import { deleteRestaurant } from "../redux/restaurants";


export class AllRestaurants extends React.Component {
  componentDidMount() {
    this.props.fetchRestaurants();
  }

  render() {
    const { restaurants } = this.props;

    return (
      <div>
        <CreateRestaurant />
        <h1>
          <b>Places I need to try in San Francisco:</b>
        </h1>
        {restaurants.map(({ id, name, neighborhoodId }) => (
          <div key={id}>
            <Link to={`/restaurants/${id}`}>
              <h2>{name}</h2>
              {neighborhoodId}
            </Link>
            <button
              type="button"
              className="ms-2 "
              onClick={() => this.props.deleteRestaurant(id)}
            >
              Check it off the list!
            </button>
          </div>
        ))}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    restaurants: state.restaurants,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    deleteRestaurant: (id) => dispatch(deleteRestaurant(id)),
  };
};

export default connect(mapState, mapDispatch)(AllRestaurants);
