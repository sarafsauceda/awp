import React from 'react';
import {connect} from 'react-redux';
import { getSingleRobot } from '../redux/singleRobot'
import EditRobot from './EditRobot'

class SingleRobot extends React.Component {

  componentDidMount() {
    // console.log('text', this.state)
    // console.log('hello', this.props.match.params.robotId)
    this.props.getSingleRobot(this.props.match.params.robotId);
  }

  render() {
    const {singleRobot} = this.props;
    //console.log('hiiiii', singleRobot)
    return (
      <div>
        {/* <EditRobot /> */}
        <h1>Name: {singleRobot.name}</h1>
      <h2>Fuel Type: {singleRobot.fuelType}</h2>
      <h2>Fuel Level:{singleRobot.fuelLevel}</h2>
      {/* <h2>Project(s) Assigned:{singleRobot.projects.title}</h2> */}
      <img src = {singleRobot.imageUrl} />
      </div>
    )

    }}
  

  const mapState = (state) => {
      console.log("singlerobotstate", state);
      return {
        singleRobot: state.singleRobot,
      };
    };

const mapDispatchToProps = (dispatch) => ({
  getSingleRobot: (robotId) => dispatch(getSingleRobot(robotId)),
});

export default (connect(mapState, mapDispatchToProps)(SingleRobot));
