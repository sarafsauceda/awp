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

  componentWillUnmount() {
    this.props.deleteRobot(this.props.match.params.robotId)
  }

  render() {
    const { robots } = this.props;

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
            <button
            type='button'
                  className="ms-2 "
                  onClick={() => this.props.deleteRobot(this.props.match.params.robotId)}
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
  //console.log("state", state);
  return {
    robots: state.robots,
  };
};

// const mapDispatch = (dispatch) => ({
//   fetchRobots: () => dispatch(fetchRobots()),
// });

// const mapState = ({ robots, projects }) => {
//   return {
//   robots,
//   projects,
//   };
//   };
  const mapDispatch = (dispatch) => {
  return {
  fetchRobots: () => dispatch(fetchRobots()),
  deleteRobot: (robotId) => dispatch(deleteRobot(robotId)),
  };
  };

export default connect(mapState, mapDispatch)(AllRobots);





{/* <>
<CreateRobot />
<ListGroup className="m-2" as="ol" numbered>
    {robots.map(({ robotId, name, projects }) => {
      return (
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
          key={id}
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{name}</div>
            <Link to={`/robots/${robotId}`}>see details </Link>
          </div>

          <Badge variant="primary" pill>
            ({projects ? projects.length : 0} projects)
          </Badge>
          <Button
            className="ms-2 "
            onClick={() => this.props.deleteRobot(robotId)}
          >
            Delete
          </Button>
        </ListGroup.Item>
      );
    })}
  </ListGroup>
</>
);
}
}

const mapState = ({ robots, projects }) => {
return {
robots,
projects,
};
};
const mapDispatch = (dispatch) => {
return {
deleteRobot: (robotId) => dispatch(deleteRobot(robotId)),
fetchRobots: () => dispatch(fetchRobots()),
};
};

export default connect(mapState, mapDispatch)(AllRobots); */}