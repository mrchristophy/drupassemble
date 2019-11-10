import React from 'react';
import {connect} from 'react-redux';
import {startAddContentType} from "../actions/contentTypes";

class ContentTypeAddForm extends React.Component {

    state = {
        title: '',
        projectId: ''
    };

    static getDerivedStateFromProps(props, state) {
        return {projectId: props.projectId};
    }

    handleOnChange = (e) => {
        this.setState({title: e.target.value});
    };

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(startAddContentType(this.state));
        this.setState({title: ''});
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input onChange={this.handleOnChange} value={this.state.title} placeholder="Content Type" type="text"/>
                    <button>Add content type</button>
                </form>
            </div>
        );
    }
}

export default connect()(ContentTypeAddForm);