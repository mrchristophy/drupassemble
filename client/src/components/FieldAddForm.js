import React, {useState} from 'react';
import {connect} from 'react-redux';
import Select from 'react-select';

const FieldAddForm = (props) => {

    const options = [
        {value: 'text', label: 'Text'},
        {value: 'integer', label: 'Integer'}
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    return (
        <div><Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
        /></div>
    );

};

const mapStateToProps = (state, props) => {
    return {};
};

export default connect(mapStateToProps)(FieldAddForm);