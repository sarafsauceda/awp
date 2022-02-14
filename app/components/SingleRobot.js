import React from "react";
import { connect } from "react-redux";
import { getSingleRobot } from "../redux/singleRobot";
import EditRobot from "./EditRobot";
import UpdateRobotForm from "./RobotForm";
import { deleteRobot } from "../redux/deleteRobot";
import { Link } from "react-router-dom";

class SingleRobot extends React.Component {
  componentDidMount() {
    // console.log('text', this.state)
    // console.log('hello there', this.props.match.params.robotId)
    this.props.getSingleRobot(this.props.match.params.robotId);
  }

  // componentWillUnmount() {
  //   this.props.deleteRobot(this.props.match.params.robotId)
  // }

  render() {
    const { singleRobot } = this.props;
    console.log("hiiiijjjji", singleRobot);
    return (
      <div>
        <h1>Name: {singleRobot.name}</h1>
        <Link to={`/robots/edit/${singleRobot.id}`}>
          <h2>(edit)</h2>
        </Link>
        <h2>Fuel Type: {singleRobot.fuelType}</h2>
        <h2>Fuel Level:{singleRobot.fuelLevel}</h2>
        {/* <h2>Project(s) Assigned:{singleRobot.projects.title}</h2> */}
        <img src={singleRobot.imageUrl} />
        <button
          type="button"
          className="ms-2 "
          onClick={() =>
            this.props.deleteRobot(this.props.match.params.robotId)
          }
        >
          X
        </button>
      </div>
    );
  }
}

const mapState = (state) => {
  console.log("singlerobotstate", state);
  return {
    singleRobot: state.singleRobot,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getSingleRobot: (robotId) => dispatch(getSingleRobot(robotId)),
  deleteRobot: (robotId) => dispatch(deleteRobot(robotId)),
});

export default connect(mapState, mapDispatchToProps)(SingleRobot);
