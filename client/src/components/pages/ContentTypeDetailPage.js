import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {startSetContentTypeDetail} from "../../actions/contentTypes";
import FieldAddForm from "../FieldAddForm";

const ContentTypeDetailPage = (props) => {

    useEffect(() => {
        props.dispatch(startSetContentTypeDetail(props.contentTypeId));
    }, [props.contentTypeId]);

    return (
        <div>
            <h2>{props.contentType.title}</h2>
            <FieldAddForm/>

            {props.fields.map((field, index) => {
                return (
                    <div key={index}>{field.label}</div>
                )
            })}

        </div>
    );

};

const mapStateToProps = (state, props) => {
    return {
        contentTypeId: props.match.params.id,
        contentType: state.contentType,
        fields: state.fields
    }
};

export default connect(mapStateToProps)(ContentTypeDetailPage);