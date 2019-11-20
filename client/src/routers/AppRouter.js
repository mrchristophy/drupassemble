import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import React, {useEffect} from "react";
import ProjectDetailPage from "../components/pages/ProjectDetailPage";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import LoginPage from "../components/pages/LoginPage";
import {startGetUser} from "../actions/users";
import {connect} from "react-redux";
import ProjectsPage from "../components/pages/ProjectsPage";
import ContentTypeDetailPage from "../components/pages/ContentTypeDetailPage";

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

const AnonymousRoute = ({component: Component, email, userLoaded, ...rest}) => {
    if (!userLoaded) {
        return (
            <div>Please wait...</div>
        );
    } else {
        return (
            <Route
                {...rest} render={(props) => email
                ? <Redirect to={{pathname: '/project', state: {from: props.location}}}/>
                : <Component {...props} />}
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
                    <AnonymousRoute userLoaded={props.user.userLoaded} email={props.user.email} path="/" exact={true} component={LoginPage}/>
                    <PrivateRoute userLoaded={props.user.userLoaded} email={props.user.email} path="/project" exact={true} component={ProjectsPage}/>
                    <PrivateRoute userLoaded={props.user.userLoaded} email={props.user.email} path="/project/:id" exact={true} component={ProjectDetailPage}/>
                    <PrivateRoute userLoaded={props.user.userLoaded} email={props.user.email} path="/content-type/:id" exact={true} component={ContentTypeDetailPage}/>
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
