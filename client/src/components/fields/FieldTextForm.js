import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {addField} from './../../actions/fields'

const FieldTextForm = (props) => {

    const onHandleSubmit = (values) => {
        props.dispatch(addField(values));
        props.setSelectedOption(false);
    };

    return (
        <div>
            <h3>Add Text Field</h3>
            <Formik
                initialValues={{label: '', machine_name: '', description: '', required: false}}
                validate={values => {
                    const errors = {};

                    if (!values.label) {
                        errors.label = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    onHandleSubmit(values);
                }}


            >
                {({isSubmitting, setFieldValue}) => (
                    <Form>
                        <Field
                            onChange={(e) => {
                                setFieldValue('machine_name', e.target.value.replace(/[^A-Z]/ig, "_").toLowerCase());
                                setFieldValue('label', e.target.value);
                            }}
                            type="text"
                            name="label"
                            placeholder="Label"/>
                        <ErrorMessage name="label" component="div"/>
                        <Field type="text" name="machine_name"/>
                        <Field component="textarea" name="description"/>
                        <Field type="checkbox" name="required"/>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>

        </div>
    );

};

export default connect()(FieldTextForm);
