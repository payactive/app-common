import { TextFieldProps } from '@material-ui/core';
import { useField } from 'formik';
import { at } from 'lodash';
import React from 'react';
import SizedInputField from '../input/SizedInputField';
import { InputFieldProps } from '../input/InputField';
import { SizedInputFieldProps } from '../input/SizedInputField';

const FormikSizedTextInputField: React.FC<SizedInputFieldProps & InputFieldProps & TextFieldProps> = ({ max, name, className, ...rest }) => {

  const [field, meta] = useField(name);
  const [touched, error] = at(meta, 'touched', 'error');

  function _renderHelperText() {

    if (touched && error) {
      return error;
    }
  }

  return (
    <SizedInputField
      error={touched && error && true}
      helperText={_renderHelperText()}
      className={className}      
      max={max}
      {...field}
      {...rest}
    />
  );
}

export default FormikSizedTextInputField 