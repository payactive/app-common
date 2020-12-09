import React from 'react';
import InputField from './InputField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Typography } from '@material-ui/core';

export default function SizedTextInputField(props) {

  const { max = 140, value } = props;

  return (
    <InputField {...props}
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
