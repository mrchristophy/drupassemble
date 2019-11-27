export const addProject = (project) => {
    return {
        type: 'ADD_PROJECT',
        project
    }
};

export const startAddProject = (projectData = {}) => {
    return (dispatch) => {
        const {
            title = '',
            createdAt = Date.now()
        } = projectData;

        const project = {title, createdAt};

        fetch('/projects/add', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
            body: `title=${title}&createdAt=${createdAt}`
        }).then((response) => {
            return response.json();
        }).then((data) => {
            dispatch(addProject({...project, id: data.project_id}))
        });

    };
};

export const deleteProject = (id) => {
    return {
        type: 'DELETE_PROJECT',
        id
    }
};

export const startDeleteProject = (id) => {

    return (dispatch) => {
        fetch('/projects/delete', {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
            body: `id=${id}`
        }).then((response) => {
            return response.json();
        }).then((data) => {
            dispatch(deleteProject(id));
        });
    }
};


export const setProjects = (projects) => {
    return {
        type: 'SET_PROJECTS',
        projects
    }
};


export const startSetProjects = () => {
    return (dispatch) => {
        fetch('/projects', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
            dispatch(setProjects(data.projects))
        });
    };
};


export const setProjectDetail = (project) => {

    return {
        type: 'SET_PROJECT_DETAIL',
        project
    }
};

export const startSetProjectDetail = (projectId) => {
    return (dispatch) => {
        fetch(`/project-detail/${projectId}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            dispatch(setProjectDetail(data.project))
        });
    };
};