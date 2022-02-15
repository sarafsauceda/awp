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
        this.props.fetchProject(this.props.match.params.id)
        console.log('this.fetch', this.props.match.params.id )
        console.log('second', this.props)
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
    
      handleSubmit(evt) {
        evt.preventDefault();
        this.props.updateProject({ ...this.props.setProject, ...this.state });
      }
    
      render() {
        console.log('title', this.state)
        const { title, completed } = this.state;
        const { handleSubmit, handleChange } = this;
    
        return (
          <div>
              <h2>Edit Project's Details</h2> 
            <form id='project-form' onSubmit={handleSubmit}>
              <label htmlFor='title'>Project Title:</label>
              <input title='title' onChange={handleChange} value={title} />
              <button type='submit'>Save Changes</button>
            </form>
          </div>
        );
      }
    }
    
    const mapStateToProps = ({ setProject }) => ({
      setProject
    });
    
    const mapDispatchToProps = (dispatch, { history }) => ({
      updateProject: (project) => dispatch(updateProject(project, history)),
      fetchProject: (id) => dispatch(fetchProject(id))
    });
    
    export default connect(mapStateToProps, mapDispatchToProps)(EditProject);