import { TextField, TextFieldProps } from '@material-ui/core';
import { useField } from 'formik';
import { at } from 'lodash';
import React, { FunctionComponent } from 'react';


interface Props {
    name: string;
    type: string;
    placeholder?: string;
}

const InputField: FunctionComponent <Props & TextFieldProps> = ({name, ...rest}) => {

    const [field, meta] = useField(name);
    const [touched, error] = at(meta, 'touched', 'error');

    function _renderHelperText() {
        
        if (touched && error) {
            return error;
        }
    }

    return (
        <TextField
            error={touched && error && true}
            helperText={_renderHelperText()}
            {...field}
            {...rest}
        />
    );
}

export default InputField
