import { TextField, TextFieldProps } from '@material-ui/core';
import { useField } from 'formik';
import { at } from 'lodash';
import React from 'react';


interface Props {
    name: string
    type: string
    placeholder?: string
    className?: string | undefined
}

const InputField: React.FC <Props & TextFieldProps> = ({name, className, ...rest}) => {

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
            className={className}
            {...field}
            {...rest}
        />
    );
}

export default InputField
