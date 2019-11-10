import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import React, {useEffect} from "react";
import ProjectDetailPage from "../components/pages/ProjectDetailPage";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import LoginPage from "../components/pages/LoginPage";
import {startGetUser} from "../actions/users";
import {connect} from "react-redux";

const PrivateRoute = ({component: Component, email, userLoaded, ...rest}) => {
    if (!userLoaded) {
        return (
            <div>Please wait...</div>
        );
    } else {
        return (
            <Route
                {...rest} render={(props) => email
                ? <Component {...props} />
                : <Redirect to={{pathname: '/', state: {from: props.location}}}/>}
            />
        )
    }
};

const Routes = (props) => {

    useEffect(() => {
        props.dispatch(startGetUser());
    }, []);


    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" exact={true} component={LoginPage}/>
                    <PrivateRoute userLoaded={props.user.userLoaded} email={props.user.email} path="/project/:id" exact={true} component={ProjectDetailPage}/>
                </Switch>
                <Footer/>
            </div>
        </BrowserRouter>
    )
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};

export default connect(mapStateToProps)(Routes);
