import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {startSetContentTypes} from "../actions/contentTypes";
import {Link} from "react-router-dom";

const ContentTypesList = (props) => {

    useEffect(() => {

        if (props.projectId) {
            props.dispatch(startSetContentTypes(props.projectId));
        }
    }, [props.projectId]);

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