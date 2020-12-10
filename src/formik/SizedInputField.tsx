import React from 'react';
import InputField from './InputField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Typography, TextFieldProps } from '@material-ui/core';

interface Props {
    value: string,
    name: string,
    max: number,
    type: string
}

const SizedTextInputField: React.FC<Props & TextFieldProps> = ({max, value, ...rest }) => {

  return (
    <InputField {...rest}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <Typography color='textSecondary' variant='caption'>{value.length} / {max}</Typography>
          </InputAdornment>
        )
      }}

    />
  );
}

export default SizedTextInputField 