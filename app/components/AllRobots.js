import React from "react";
import { connect } from "react-redux";
import { fetchRobots } from "../redux/robots";
import { Link } from "react-router-dom";
import CreateRobot from "./CreateRobot";
import EditRobot from "./EditRobot";
import { deleteRobot } from "../redux/deleteRobot";

// Notice that we're exporting the AllRobots component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllRobots extends React.Component {
  componentDidMount() {
    this.props.fetchRobots();
  }

  render() {
    const { robots } = this.props;

    return (
      <div>
        <CreateRobot />
        {/* <EditRobot /> */}
        {robots.map(( { id, name, imageUrl }) => (
          <div key={id}>
            <Link to={`/robots/${id}`}>
             <h2>{name}</h2>
             <img src={imageUrl} />
            </Link>
            <button
            type="button"
                  className="ms-2 "
                  onClick={() => this.props.deleteRobot(id)}
                >
                  X
            </button>
          </div>
        ))}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    robots: state.robots,
  };
};

  const mapDispatch = (dispatch) => {
  return {
    fetchRobots: () => dispatch(fetchRobots()),
    deleteRobot: (id) => dispatch(deleteRobot(id)),
  };
  };

export default connect(mapState, mapDispatch)(AllRobots);
