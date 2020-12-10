import React from 'react';
import PropTypes from 'prop-types';
import { at } from 'lodash';
import { useField } from 'formik';
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  SelectProps,
  FormControlProps
} from '@material-ui/core';

interface Data {
    label: string,
    value: string 
}

interface Props {
    data: Data[],
    name: string
}

const SelectField:React.FC<Props & SelectProps & FormControlProps> = (props) => {
  const { label, data, ...rest } = props;
  const [field, meta] = useField(name);
  const { value: selectedValue } = field;
  const [touched, error] = at(meta, 'touched', 'error');
  const isError = touched && error && true;
  function _renderHelperText() {
    if (isError) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }

  return (
    <FormControl {...rest} error={isError}>
      <InputLabel>{label}</InputLabel>
      <Select label={label} {...field} value={selectedValue ? selectedValue : ''}>
        {data.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {_renderHelperText()}
    </FormControl>
  );
}

export default SelectField;