import React from 'react';
import {connect} from 'react-redux';
import {startLoginUser} from "../../actions/users";

class LoginPage extends React.Component {

    state = {
        email: '',
        password: ''
    };

    onHandleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onHandleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(startLoginUser(this.state));
    };

    render() {
        return (
            <div onSubmit={this.onHandleSubmit} className="login-form">
                <h1>Login Form</h1>
                <form action="auth" method="POST">
                    <input onChange={this.onHandleChange} type="text" name="email" placeholder="Username" required/>
                    <input onChange={this.onHandleChange} type="password" name="password" placeholder="Password" required/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }

};

export default connect()(LoginPage);