import React from 'react';
import {connect} from 'react-redux';
import ProjectList from "../ProjectsList";
import ProjectAddForm from "../ProjectAddForm";

const ProjectsPage = () => (
    <div>
        <ProjectAddForm/>
        <ProjectList/>
    </div>
);

export default ProjectsPage;