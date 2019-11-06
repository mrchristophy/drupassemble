import {BrowserRouter, Link, NavLink, Route, Switch} from "react-router-dom";
import React from "react";
import Homepage from "../components/pages/Homepage";
import ProjectDetailPage from "../components/pages/ProjectDetailPage";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";

export default () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" exact={true} component={Homepage}/>
                <Route path="/project/:id" exact={true} component={ProjectDetailPage}/>
            </Switch>
            <Footer/>
        </div>
    </BrowserRouter>
);