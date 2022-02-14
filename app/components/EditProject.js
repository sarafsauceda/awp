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
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchProject(id);
      }
    
      componentWillUnmount() {
        this.props.setProject();
      }
    
      componentDidUpdate(prevProps) {
        if (prevProps.project.id !== this.props.project.id) {
          this.setState({
            title: this.props.project.title || '',
            // completed: this.props.completed || false
          });
        }
      }
    
      handleChange(evt) {
        this.setState({
          [evt.target.title]: evt.target.value
        });
      }
    
      handleSubmit(evt) {
        evt.preventDefault();
        this.props.updateProject({ ...this.props.project, ...this.state });
      }
    
      render() {
        console.log('title', this.state)
        const { title, completed } = this.state;
        const { handleSubmit, handleChange } = this;
    
        return (
          <div>
            <form id='project-form' onSubmit={handleSubmit}>
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


