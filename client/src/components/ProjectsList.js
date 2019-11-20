import React, {useEffect, useCallback} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {startDeleteProject, startSetProjects} from "../actions/projects";


const ProjectList = (props) => {

    useEffect(() => {
        props.dispatch(startSetProjects());
    }, []);

    const onHandleDelete = useCallback((id) => {
        props.dispatch(startDeleteProject(id));
    });

    return (
        <div>
            <h2>Projects</h2>

            {props.projects.length < 1 && "Loading projects..."}

            {props.projects.map((project) => {
                return <div key={project.id}><Link to={`/project/${project.id}`}>{project.title}</Link> <a onClick={() => onHandleDelete(project.id)}>Delete</a></div>
            })}
        </div>
    )
};

const mapStateToprops = (state) => {
    return {
        projects: state.projects
    }
};

export default connect(mapStateToprops)(ProjectList);