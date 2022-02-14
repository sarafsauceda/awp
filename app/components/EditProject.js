import React from "react"

class EditProject extends React.Component {
    constructor() {
        super()
        this.state = {
            title: '',
            completed: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {
      this.setState(prevState => ({completed: !prevState.completed }))
    }

    render() {
        const { completed } = this.state
        console.log('completed', this.state.completed)
        return (
            <div>
        <button type="button" onClick={this.handleClick}>Complete Status</button>
            </div>
        )
    }
    
    export default EditProject


