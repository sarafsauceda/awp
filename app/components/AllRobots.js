import React from "react";
import { connect } from "react-redux";
import { fetchRobots } from "../redux/robots";

// Notice that we're exporting the AllRobots component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllRobots extends React.Component {
  componentDidMount() {
    this.props.fetchRobots();
  }

  render() {
    const { robots } = this.props;
    console.log("robots!!!", robots);
    return (
      <div>
          {robots.map((robot) => {
            return (
            <div key={robot.id}>
              <h1>{robot.name}</h1>
              <img src={robot.imgageUrl}></img>
            </div>
    )})}
      </div>
    );
  }
}

const mapState = (state) => {
  console.log("state", state);
  return {
    robots: state.robots,
  };
};

const mapDispatch = (dispatch) => ({
  fetchRobots: () => dispatch(fetchRobots()),
});

export default connect(mapState, mapDispatch)(AllRobots);