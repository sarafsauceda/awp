import React, { Component } from 'react';
import { updateProject } from '../redux/updateProject'
import { fetchProjects, setProjects } from '../redux/projects';
import { _setProject, fetchProject } from '../redux/project'
import { connect } from 'react-redux';

class EditProject extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            // completed: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
      }
    
      componentDidUpdate(prevProps) {
        if (!prevProps.project && this.props.project) {
          const { title } = this.props.project;
          this.setState({ title });
        }
      }
    
      handleChange(evt) {
        this.setState({
          [evt.target.title]: evt.target.value,
        });
      }
    
      async handleSave(evt) {
        evt.preventDefault();
        try {
          const { title } = this.state;
          await this.props.updateProject({
            id: this.props.project.id,
            title
          });
        } catch (er) {
          this.setState({ error: er.response.data });
        }
      }
    
      render() {
        console.log('title', this.state)
        const { title, completed } = this.state;
        const { handleSave, handleChange } = this;
    
        return (
          <div>
              <h2>Edit Project's Details</h2> 
            <form id='project-form' onSubmit={handleSave}>
              <label htmlFor='title'>Project Title:</label>
              <input title='title' onChange={handleChange} value={title} />    
              <button type='submit'>Save Changes</button>
            </form>
          </div>
        );
      }
    }
    
    const mapStateToProps = ({ project }) => ({
      project
    });
    
    const mapDispatchToProps = (dispatch, { history }) => ({
      updateProject: (project) => dispatch(updateProject(project, history)),
      fetchProject: (id) => dispatch(fetchProject(id)),
      setProject: () => dispatch(_setProject({}))
    });
    
    export default connect(mapStateToProps, mapDispatchToProps)(EditProject);
    //     this.handleClick = this.handleClick.bind(this)
    // }
    
    // handleClick() {
    //   this.setState(prevState => ({completed: !prevState.completed }))
    // }

    // render() {
    //     const { completed } = this.state
    //     console.log('completed', this.state.completed)
    //     return (
    //         <div>
    //     <button type="button" onClick={this.handleClick}>Complete Status</button>
    //         </div>
    //     )
    // }
    
    // export default EditProject


