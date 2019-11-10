import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

const ProjectList = (props) => (
    <div>
        <h2>Projects</h2>

        {props.projects.length < 1 && "Loading projects..."}

        {props.projects.map((project) => {
            return <div key={project.id}><Link to={`/project/${project.id}`}>{project.title}</Link></div>
        })}
    </div>
);

const mapStateToprops = (state) => {
    return {
        projects: state.projects
    }
};

export default connect(mapStateToprops)(ProjectList);