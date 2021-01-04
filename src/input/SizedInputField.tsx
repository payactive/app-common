import { TextFieldProps, Typography } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import React, { useRef } from 'react';
import InputField, { InputFieldProps } from './InputField';
import { useState } from 'react';



interface SizedInputFieldProps {
    max: number
}

const SizedInputField: React.FC<SizedInputFieldProps & InputFieldProps & TextFieldProps> = ({ max, onChange, ...rest }) => {

    const [size, setSize] = useState(0)

    const _onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setSize(e.target.value.length)
        if (onChange) {
            onChange(e)
        }
    }

    return (
        <InputField            
            onChange={_onChange}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="start">
                        <Typography color='textSecondary' variant='caption'>{size} / {max}</Typography>
                    </InputAdornment>
                )
            }}
            {...rest} />
    );
}

export type { SizedInputFieldProps };
export default SizedInputField