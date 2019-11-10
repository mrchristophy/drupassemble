import db from '../firebase/firebase';
import {setProjects} from "./projects";

export const addContentType = (contentType) => {
    return {
        type: 'ADD_CONTENT_TYPE',
        contentType
    }
};

export const startAddContentType = (contentTypeData = {}) => {
    return (dispatch) => {

        const {
            title = '',
            projectId = '',
            createdAt = Date.now()
        } = contentTypeData;

        const contentType = {title, projectId, createdAt};

        db.ref('contentTypes').push(contentType).then((ref) => {
            dispatch(addContentType({
                id: ref.key,
                ...contentType
            }));
        });

    };
};

export const setContentTypes = (contentTypes) => {
    return {
        type: 'SET_CONTENT_TYPES',
        contentTypes
    }
};

export const startSetContentTypes = (projectId) => {

    console.log('projecyIds', projectId);

    return (dispatch) => {
        const contentTypes = [];


        db.ref('contentTypes')
            .orderByChild('projectId')
            .equalTo(projectId)
            .once('value')
            .then((snapshot) => {
                console.log(snapshot);
                snapshot.forEach((childSnaphot) => {

                    console.log(childSnaphot.val());
                    contentTypes.push({
                        id: childSnaphot.key,
                        ...childSnaphot.val()
                    });
                });

                dispatch(setContentTypes(contentTypes));
            });
    };
};