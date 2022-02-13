import React from "react";
import { connect } from "react-redux";
import { fetchRobots } from "../redux/robots";
import { Link } from "react-router-dom";
import CreateRobot from "./CreateRobot";
import EditRobot from "./EditRobot";

// Notice that we're exporting the AllRobots component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllRobots extends React.Component {
  componentDidMount() {
    this.props.fetchRobots();
  }

  render() {
    const { robots } = this.props;
    console.log("not this one!!", robots);
    return (
      <div>
        <CreateRobot />
        {/* <EditRobot /> */}
        {robots.map((robot) => (
          <div key={robot.id}>
            <Link to={`/robots/${robot.id}`}>
             <h2>{robot.name}</h2>
             <img src={robot.imageUrl} />
            </Link>
          </div>
          
        ))}
      </div>
    );
  }
}

const mapState = (state) => {
  //console.log("state", state);
  return {
    robots: state.robots,
  };
};

const mapDispatch = (dispatch) => ({
  fetchRobots: () => dispatch(fetchRobots()),
});

export default connect(mapState, mapDispatch)(AllRobots);
