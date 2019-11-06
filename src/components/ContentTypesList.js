import React, {useState, useEffect} from 'react';
import configureStore from "../store/configureStore";
import {connect} from 'react-redux';
import {startSetContentTypes} from "../actions/contentTypes";
import {Link} from "react-router-dom";

let contentTypesLoaded = false;

const ContentTypesList = (props) => {

    useEffect(() => {

        if (!contentTypesLoaded && props.projectId) {
            props.dispatch(startSetContentTypes(props.projectId));
            contentTypesLoaded = true;
        }
    });

    return (
        <div>
            {props.contentTypes.map((contentType) => {
                return <div key={contentType.id}>{contentType.title}</div>
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        contentTypes: state.contentTypes
    }
};

export default connect(mapStateToProps)(ContentTypesList);