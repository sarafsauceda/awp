import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getSingleRobot } from "../redux/singleRobot";

class SingleRobot extends React.Component {
  componentDidMount() {
    this.props.getSingleRobot(this.props.match.params.robotId);
  }
  render() {
    console.log('hellooo', this.props.robotId)
    const { robot } = this.props
    return <div />;

  }
}

const mapState = (state) => {
  console.log("state", state);
  return [{
    singleRobot: state.singleRobot,
  }];
};

const mapDispatch = (dispatch) => ({
  getSingleRobot: () => dispatch(getSingleRobot()),
});

export default connect(mapState, mapDispatch)(SingleRobot);

// const SingleRobot = (props) => {
//     render{
//   return
//     <div />
//   );
// }
// }
// const mapStateToProps = (robots) => {
//   return {
//       robot
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchSingleRobot: (id) => {
//       dispatch(fetchSingleRobot(id));
//     },
//     },
//   };
// };
