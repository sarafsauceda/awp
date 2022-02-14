// import React, { Component } from 'react';
// import { deleteTodo, updateTodo } from '../store/todos';
// import { fetchTodo, _setTodo } from '../store/todo';
// import { connect } from 'react-redux';

// class EditTodo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       taskName: '',
//       assignee: ''
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   componentDidMount() {
//     const { id } = this.props.match.params;
//     this.props.fetchTodo(id);
//   }

//   componentWillUnmount() {
//     this.props.clearTodo();
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.todo.id !== this.props.todo.id) {
//       this.setState({
//         taskName: this.props.todo.taskName || '',
//         assignee: this.props.todo.assignee || ''
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
//     this.props.updateTodo({ ...this.props.todo, ...this.state });
//   }

//   render() {
//     const { assignee, taskName } = this.state;
//     const { handleSubmit, handleChange } = this;

//     return (
//       <div>
//         <form id='todo-form' onSubmit={handleSubmit}>
//           <label htmlFor='taskName'>Task Name:</label>
//           <input name='taskName' onChange={handleChange} value={taskName} />

//           <label htmlFor='assignee'>Assign To:</label>
//           <input name='assignee' onChange={handleChange} value={assignee} />

//           <button type='submit'>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapStateToProps = ({ todo }) => ({
//   todo
// });

// const mapDispatchToProps = (dispatch, { history }) => ({
//   updateTodo: (todo) => dispatch(updateTodo(todo, history)),
//   deleteTodo: (todo) => dispatch(deleteTodo(todo, history)),
//   fetchTodo: (id) => dispatch(fetchTodo(id)),
//   clearTodo: () => dispatch(_setTodo({}))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(EditTodo);

// // import React, { Component } from 'react';
// // import { updateRobot } from '../store';
// // import { connect } from 'react-redux';
// // import Stack from '@mui/material/Stack';
// // import Button from '@mui/material/Button';
// // import Box from '@mui/material/Box';
// // import TextField from '@mui/material/TextField';

// // class UpdateRobotForm extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       name: this.props.robot ? this.props.robot.name : '',
// //       fuelLevel: this.props.robot ? this.props.robot.fuelLevel : '',
// //     };
// //     this.handleChange = this.handleChange.bind(this);
// //     this.handleSave = this.handleSave.bind(this);
// //   }

// //   componentDidUpdate(prevProps) {
// //     if (!prevProps.robot && this.props.robot) {
// //       const { name, fuelLevel } =
// //         this.props.robot;
// //       this.setState({ name, fuelLevel });
// //     }
// //   }

// //   handleChange(evt) {
// //     this.setState({
// //       [evt.target.name]: evt.target.value,
// //     });
// //   }

// //   async handleSave(evt) {
// //     evt.preventDefault();
// //     try {
// //       const { name, fuelLevel } =
// //         this.state;
// //       await this.props.updateRobot({
// //         id: this.props.robot.id,
// //         name,
// //         fuelLevel
// //       });
// //     } catch (er) {
// //       this.setState({ error: er.response.data });
// //     }
// //   }

// //   render() {
// //     const { projects, props } = this.props;
// //     const { name, fuelLevel } = this.state;
// //     const { handleChange, handleSave } = this;

// //     return (
// //       <div>
// //         <Box
// //           id="robot-form" onSubmit={handleSave} component="form"
// //           sx={{
// //             '& .MuiTextField-root': { m: 1, width: '50ch' },
// //           }}
// //           noValidate
// //           autoComplete="off"
// //         >
// //           <TextField
// //             required
// //             label="Name"
// //             name="name"
// //             onChange={handleChange}
// //             value={name}
// //             variant="filled"
// //           />
// //           <TextField
// //             required label="fuelLevel" name="fuelLevel" onChange={handleChange} value={fuelLevel}
// //             variant="filled"
// //           />
// //           {/* )})} */}
// //           <Stack spacing={2} direction="row" className="buttons">
// //             <Button type="submit" variant="outlined" color="secondary">
// //               Save
// //             </Button>

// //             <Button
// //               type="button"
// //               onClick={() => props.history.push('/robots')}
// //               variant="outlined"
// //               color="secondary"
// //             >
// //               Cancel
// //             </Button>
// //           </Stack>
// //         </Box>
// //       </div>
// //     );
// //   }
// // }

// // // const mapStateToProps = (state, { props }) => {
// // //   const robot = state.robots.find(
// // //     (robot) => robot.id === props.match.params.id * 1
// // //   );
// // //   return {
// // //     robot,
// // //     ...state,
// // //   };
// // // };

// // const mapState = (state) => {
// //   return {
// //     ...state,
// //   };
// // };

// // const mapDispatchToProps = (dispatch) => {
// //   return {
// //     updateRobot: (robot) => dispatch(updateRobot(robot)),
// //   };
// // };

// // export default connect(mapState, mapDispatchToProps)(UpdateRobotForm);
