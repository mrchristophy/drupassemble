import db from '../firebase/firebase';
import {addProject, setProjects} from "./projects";

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

        fetch('/content-types/add', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
            body: `title=${title}&createdAt=${createdAt}&projectId=${projectId}`
        }).then((response) => {
            return response.json();
        }).then((data) => {
            dispatch(addContentType({...contentType, id: data.contentTypeId}))
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

    return (dispatch) => {
        fetch(`/content-types/${projectId}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            dispatch(setContentTypes(data.contentTypes))
        });
    };

};

export const setContentTypeDetail = (contentType) => {
    return {
        type: 'SET_CONTENT_TYPE_DETAIL',
        contentType
    }
};

export const startSetContentTypeDetail = (contentTypeId) => {

    return (dispatch) => {
        fetch(`/content-type-detail/${contentTypeId}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            dispatch(setContentTypeDetail(data.contentType))
        });
    };

};