import React from 'react';
import {connect} from 'react-redux';
import {startAddProject} from "../actions/projects";

class ProjectAddForm extends React.Component {

    state = {
        title: ''
    };

    onHandleChange = (e) => {
        this.setState({title: e.target.value});
    };

    onHandleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(startAddProject(this.state));
        this.setState({title: ''});
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onHandleSubmit}>
                    <input value={this.state.title} onChange={this.onHandleChange} name="project_title" type="text" placeholder="My new project"/>
                    <button>Add project</button>
                </form>
            </div>
        )
    }

}

export default connect()(ProjectAddForm);