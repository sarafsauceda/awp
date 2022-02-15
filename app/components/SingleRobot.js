import React from "react";
import { connect } from "react-redux";
import { getSingleRobot } from "../redux/singleRobot";
import EditRobot from "./EditRobot";
// import UpdateRobotForm from "./RobotForm";
import { deleteRobot } from "../redux/deleteRobot";
import { Link } from "react-router-dom";

class SingleRobot extends React.Component {
  componentDidMount() {
    this.props.getSingleRobot(this.props.match.params.robotId);
  }

  render() {
    const { singleRobot } = this.props;
    console.log("hiiiijjjji", singleRobot);
    let projects = [];
    if (singleRobot.hasOwnProperty("projects")) {
      projects = singleRobot.projects;
    }
    return (
      <div>
        <h1>Name: {singleRobot.name}</h1>
        <Link to={`/robots/edit/${singleRobot.id}`}>
          <h2>(edit)</h2>
        </Link>
        <h2>Fuel Type: {singleRobot.fuelType}</h2>
        <h2>Fuel Level:{singleRobot.fuelLevel}</h2>
        <h2>Project(s) Assigned:</h2>
        {projects.map(({ id, title }) => (
          <div key={id}>
            <h2>{title}</h2>
          </div>
        ))}
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
