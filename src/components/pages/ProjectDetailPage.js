import React from 'react';
import {connect} from 'react-redux';
import ContentTypeAddForm from "../ContentTypeAddForm";
import ContentTypesList from "../ContentTypesList";

const ProjectDetailPage = (props) => {

    console.log(props);
    return (
        <div>
            <h2>{props.project && props.project.title}</h2>

            <ContentTypeAddForm projectId={props.project && props.project.id}/>
            <ContentTypesList projectId={props.project && props.project.id}/>
        </div>
    )
};

const mapStateToProps = (state, props) => {

    return {
        project: state.projects.find((project) => {
            return project.id === props.match.params.id
        })
    }
};

export default connect(mapStateToProps)(ProjectDetailPage);