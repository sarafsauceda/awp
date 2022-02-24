import React from "react";
import { connect } from "react-redux";
import { fetchRestaurants } from "../redux/restaurants";
import { Link } from "react-router-dom";
import CreateRestaurant from "./AddRestaurant";
// import EditRestaurant from "./EditRestaurant";
import { deleteRestaurant } from "../redux/restaurants";
import Map from "./Map"


export class AllRestaurants extends React.Component {
  componentDidMount() {
    this.props.fetchRestaurants();
  }

  render() {
    const { restaurants } = this.props;
    console.log('nnnn ->>', this.props)

    return (
      <div>
        <CreateRestaurant />
        {/* <Map /> */}
        <h3>
          <b>Places I need to try in San Francisco:</b>
        </h3>
        {restaurants.map(({ id, name, type, neighborhoodId }) => (
          <div key={id}>
              <p>{name}</p>
            <h4>Type: {type}</h4>              
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
