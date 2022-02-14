import React, { Component } from 'react';
import { updateRobott } from '../store';
import { connect } from 'react-redux';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

class UpdateRobotForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.robot ? this.props.robot.name : '',
      fuelLevel: this.props.robot ? this.props.robot.fuelLevel : '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.robot && this.props.robot) {
      const { name, fuelLEvel } =
        this.props.robot;
      this.setState({ name, fuelLevel });
    }
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  async handleSave(evt) {
    evt.preventDefault();
    try {
      const { name, fuelLevel } =
        this.state;
      await this.props.updateRobot({
        id: this.props.robot.id,
        name,
        fuelLevel
      });
    } catch (er) {
      this.setState({ error: er.response.data });
    }
  }

  render() {
    const { projects, props } = this.props;
    const { name, fuelLevel } =
      this.state;
    const { handleChange, handleSave } = this;

    return (
      <div>
        <Box
          id="robot-form"
          onSubmit={handleSave}
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '50ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            label="Name"
            name="name"
            onChange={handleChange}
            value={name}
            variant="filled"
          />
          <TextField
            required
            label="fuelLevel"
            name="fuelLevel"
            onChange={handleChange}
            value={fuelLevel}
            variant="filled"
          />
          
            {/* {campuses.map((campus) => {
              return (
                <MenuItem key={campus.id} value={campus.id}>
                  {campus.name}
                </MenuItem> */}
              );
            })}
          </TextField>
          <Stack spacing={2} direction="row" className="buttons">
            <Button type="submit" variant="outlined" color="secondary">
              Save
            </Button>

            <Button
              type="button"
              onClick={() => props.history.push('/robots')}
              variant="outlined"
              color="secondary"
            >
              Cancel
            </Button>
          </Stack>
        </Box>
      </div>
    );
  }
}

const mapStateToProps = (state, { props }) => {
  const robot = state.robots.find(
    (robot) => robot.id === props.match.params.id * 1
  );
  return {
    robot,
    ...state,
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    updateRobot: (robot) => dispatch(updateRobot(robot, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateRobottForm);