// import React, { Component } from 'react';
// import { deleteRobot } from '../redux/deleteRobot';
// import { updateRobot } from '../redux/updateRobot'
// import { fetchRobots, setRobots } from '../redux/robots';
// import { setRobot, fetchRobot } from '../redux/robot'
// import { connect } from 'react-redux';
// // import { Button } from 'react-native'

// class EditRobot extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   componentDidMount() {
//     const { robotId } = this.props.match.params;
//     this.props.fetchRobot(robotId);
//   }

//   componentWillUnmount() {
//     this.props.deleteRobot();
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.robot.id !== this.props.robot.id) {
//       this.setState({
//         name: this.props.robot.name || '',
//       });
//     }
//   }

//   handleChange(evt) {
//     this.setState({
//       [evt.target.name]: evt.target.value
//     });
//   }

//   handleSubmit(evt) {
//     evt.preventDefault();
//     this.props.updateRobot({ ...this.props.robot, ...this.state });
//   }

//   render() {
//     const { name } = this.state;
//     const { handleSubmit, handleChange } = this;

//     return (
//       <div>
//         <form id='robot-form' onSubmit={handleSubmit}>
//           <label htmlFor='name'>Robot Name:</label>
//           <input name='name' onChange={handleChange} value={name} />
// {/* 
//           <label htmlFor='assignee'>Assign To:</label>
//           <input name='assignee' onChange={handleChange} value={assignee} /> */}

//           <button type='submit'>Submit</button>
//         </form>
//         <form onSubmit={(ev) => ev.preventDefault()}>
//           <button
//           type="button"
//             className="remove"
//             onClick={() => this.props.deleteRobot(this.props.match.params.id)}
//           >
//             Remove
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapStateToProps = ({ robot }) => ({
//   robot
// });

// const mapDispatchToProps = (dispatch, { history }) => ({
//   updateRobot: (robot) => dispatch(updateRobot(robot, history)),
//   deleteRobot: (robot) => dispatch(deleteRobot(robot, history)),
//   fetchRobot: (robotId) => dispatch(fetchRobot(robotId)),
//   clearRobot: () => dispatch(setRobot({}))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(EditRobot);