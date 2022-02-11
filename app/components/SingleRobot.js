import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography'
import {connect} from 'react-redux';
import { getSingleRobot } from '../redux/singleRobot'

class SingleRobot extends React.Component {

  componentDidMount() {
    console.log('text', this.state)
    console.log('hello', this.props.match.params.robotId)
    this.props.getSingleRobot(this.props.match.params.robotId);
  }

  render() {
    const {singleRobot} = this.props;
    console.log('hiiiii', singleRobot)
    return (
      <div>
        <h1>
      {singleRobot.name}
      </h1>
      </div> 
    )

    }}
  

  const mapState = (state) => {
      console.log("state", state);
      return {
        singleRobot: state.singleRobot,
      };
    };

const mapDispatchToProps = (dispatch) => ({
  getSingleRobot: (robotId) => dispatch(getSingleRobot(robotId)),
});

export default (connect(mapState, mapDispatchToProps)(SingleRobot));
