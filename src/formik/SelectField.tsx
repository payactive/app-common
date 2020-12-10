import {
    FormControl,
    FormControlProps, FormHelperText, InputLabel,
    MenuItem, Select,
    SelectProps
} from '@material-ui/core';
import { useField } from 'formik';
import { at } from 'lodash';
import React from 'react';

interface Data {
    label: string,
    value: string 
}

interface Props {
    data: Data[],
    name: string
}

const SelectField:React.FC<Props & SelectProps & FormControlProps> = ({name, label, data, ...rest}) => {

  const [field, meta] = useField(name);
  const { value: selectedValue } = field;
  const [touched, error] = at(meta, 'touched', 'error');
  const isError = touched && error && true;
  function _renderHelperText(): React.ReactElement | null{
    if (isError) {
      return <FormHelperText>{error}</FormHelperText>
    } else {
        return null
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