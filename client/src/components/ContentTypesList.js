import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {startSetContentTypes} from "../actions/contentTypes";
import {Link} from "react-router-dom";

const ContentTypesList = (props) => {

    useEffect(() => {
        props.dispatch(startSetContentTypes(props.projectId));
    }, [props.projectId]);


    return (
        <div>
            {props.contentTypes && props.contentTypes.map((contentType) => {
                return <div key={contentType.id}><Link to={`/content-type/${contentType.id}`}>{contentType.title}</Link></div>
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