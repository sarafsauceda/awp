import React from 'react';
import { connect } from 'react-redux';
import { fetchRobots } from '../redux/robots';
import { Link } from 'react-router-dom'

// Notice that we're exporting the AllRobots component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllRobots extends React.Component {
  render() {
    return (
      <div>
        <h2>Robots</h2>
        <ul>
          {this.props.robots.map((robot) => (
            <div key={robot.id}>
              <AllRobots robot={robot} />
            </div>
          ))}
        </ul>
      </div>
      //<div />;
    );
  }
}

const mapState = (state) => {
  return {
    robots: state.robots,
  };
};

const mapDispatch = (dispatch) => ({
  fetchRobots: () => dispatch(fetchRobots())
});

export default connect(mapState, mapDispatch)(AllRobots);
