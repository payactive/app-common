
import { useField } from 'formik';
import { at } from 'lodash';
import React from 'react';
import InputField, { InputFieldProps } from '../input/InputField';
import { TextFieldProps } from '@material-ui/core';


interface Props {
    name: string
    type?: string
    placeholder?: string
    className?: string | undefined
}

const FormikInputField: React.FC<Props & InputFieldProps & TextFieldProps> = ({ name, className, ...rest }) => {

    const [field, meta] = useField(name);
    const [touched, error] = at(meta, 'touched', 'error');

    function _renderHelperText() {

        if (touched && error) {
            return error;
        }
    }

    return (
        <InputField
            error={touched && error && true}
            helperText={_renderHelperText()}
            className={className}
            {...field}
            {...rest}
        />
    );
}

export default FormikInputField
