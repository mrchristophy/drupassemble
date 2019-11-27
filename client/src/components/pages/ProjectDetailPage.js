import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import ContentTypeAddForm from "../ContentTypeAddForm";
import ContentTypesList from "../ContentTypesList";
import {startSetProjectDetail} from "../../actions/projects";

const ProjectDetailPage = (props) => {

    useEffect(() => {
        props.dispatch(startSetProjectDetail(props.projectId));
    }, [props.projectId]);

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
        projectId: props.match.params.id,
        project: state.project
    }
};

export default connect(mapStateToProps)(ProjectDetailPage);