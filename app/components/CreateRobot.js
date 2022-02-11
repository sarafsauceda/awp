// import React, { Component } from 'react';
// import { createRobot } from '../redux/createRobot'
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

// class CreateRobot extends Component {
//   constructor() {
//     super();
//     this.state = {
//       robotName: ''
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(evt) {
//     this.setState({
//       [evt.target.name]: evt.target.value
//     });
//     console.log(this.state)
//   }

//   handleSubmit(evt) {
//     evt.preventDefault();
//     this.props.createRobot({ ...this.state });
//   }

//   render() {
//     const { robotName } = this.state;
//     const { handleSubmit, handleChange } = this;
//     console.log(this.state)
//     return (
//       <form id='robot-form' onSubmit={handleSubmit}>
//         <label htmlFor='robotName'>Robot Name:</label>
//         <input name='robotName' onChange={handleChange} value={robotName} />
//         <button type='submit'>Submit</button>
//         <Link to='/'>Cancel</Link>
//       </form>
//     );
//   }
// }

// const mapState = (state) => {
//     console.log("state", state);
//     return {
//       createRobot: state.robot,
//     };
//   };

// const mapDispatchToProps = (dispatch, { history }) => ({
//   createRobot: (robot) => dispatch(createRobot(robot, history))
// });

// export default connect(mapState, mapDispatchToProps)(CreateRobot);