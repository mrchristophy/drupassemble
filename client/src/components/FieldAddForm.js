import React, {useState} from 'react';
import {connect} from 'react-redux';
import Select from 'react-select';
import FieldTextForm from "./fields/FieldTextForm";

const FieldAddForm = (props) => {

    const options = [
        {value: 'text', label: 'Text'},
        {value: 'integer', label: 'Integer'}
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    const onHandleChange = (selectedOption) => {
        setSelectedOption(selectedOption.value);
    };


    return (
        <div>
            <Select
                value={selectedOption}
                onChange={onHandleChange}
                options={options}
            />
            {selectedOption === 'text' && <FieldTextForm setSelectedOption={setSelectedOption}/>}
        </div>
    );

};

const mapStateToProps = (state, props) => {
    return {};
};

export default connect(mapStateToProps)(FieldAddForm);