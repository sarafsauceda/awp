import React from 'react';
import { connect } from 'react-redux';
import { fetchRobots } from '../redux/robots';

// Notice that we're exporting the AllRobots component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllRobots extends React.Component {
  constructor() {
    super();
    this.state = {
      robots:[]
    }
  }
  componentDidMount(){
    this.props.fetchRobots();
  }
  render() {
    const { robots } = this.state;
    return (
      <div className='all-robots'>
        <h1>{this.props.robot.name}</h1>
        <div>{this.props.robot.imageUrl}</div>
      </div>
    )}
}

const mapState = (state) => {
  // console.log('hello!!!', state)
  return {
    robots: state.robots
  };
};

const mapDispatch = (dispatch) => ({
  fetchRobots: () => dispatch(fetchRobots())
});

export default connect(mapState, mapDispatch)(AllRobots);
