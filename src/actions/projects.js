import db from '../firebase/firebase';

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

        const project = {title, createdAt}

        db.ref('projects').push(project).then((ref) => {
            dispatch(addProject({
                id: ref.key,
                ...project
            }))
        });

    };
};


export const setProjects = (projects) => {
    return {
        type: 'SET_PROJECTS',
        projects
    }
};


export const startSetProjects = () => {
    return (dispatch) => {
        const projects = [];

        db.ref('projects').once('value')
            .then((snapshot) => {
                snapshot.forEach((childSnaphot) => {
                    projects.push({
                        id: childSnaphot.key,
                        ...childSnaphot.val()
                    });
                });

                dispatch(setProjects(projects));
            });
    }
};


