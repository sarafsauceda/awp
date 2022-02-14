import React, { Component } from 'react';
import { deleteRobot } from '../redux/deleteRobot';
import { updateRobot } from '../redux/updateRobot'
import { fetchRobots, setRobots } from '../redux/robots';
import { _setRobot, fetchRobot } from '../redux/robot'
import { connect } from 'react-redux';

class EditRobot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      fuelLevel: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchRobot(id);
  }

  componentWillUnmount() {
    this.props.setRobot();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.robot.id !== this.props.robot.id) {
      this.setState({
        name: this.props.robot.name || '',
        fuelLevel: this.props.fuelLevel || ''
      });
    }
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateRobot({ ...this.props.robot, ...this.state });
  }

  render() {
    console.log('name', this.state)
    const { name, fuelLevel } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <div>
        <form id='robot-form' onSubmit={handleSubmit}>
          <label htmlFor='name'>Robot Name:</label>
          <input name='name' onChange={handleChange} value={name} />

          <label htmlFor='fuelLevel'>Fuel Level:</label>
          <input name='fuelLevel' onChange={handleChange} value={fuelLevel} />

          <button type='submit'>Save Changes</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ robot }) => ({
  robot
});

const mapDispatchToProps = (dispatch, { history }) => ({
  updateRobot: (robot) => dispatch(updateRobot(robot, history)),
  fetchRobot: (id) => dispatch(fetchRobot(id)),
  setRobot: () => dispatch(_setRobot({}))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditRobot);