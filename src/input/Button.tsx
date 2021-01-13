import { Button as MaterialUiButton, ButtonProps, CircularProgress, makeStyles } from '@material-ui/core';
import React from 'react';

interface ButtonInputProps {
    name: string
    label?: string
    loading?: boolean
    disabled?: boolean    
}

const useStyles = makeStyles((theme) => ({
    wrapper: {
        position: 'relative',
    },
    buttonProgress: {
        color: theme.palette.success.main,
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}));

const Button: React.FC<ButtonInputProps & ButtonProps> = ({ name, label = name, disabled = false, loading = false, ...rest }) => {

    const classes = useStyles()

    return (
        <MaterialUiButton
            variant='contained'
            color='primary'
            name={name}
            style={{ borderRadius: '2px', fontFamily: 'Roboto, light' }}
            disabled={disabled || loading}
            autoCapitalize='none'
            {...rest}
        >
            { label}
            { loading && <CircularProgress size={24} className={classes.buttonProgress} />}
        </MaterialUiButton>
    );
}

export type { ButtonInputProps };
export default Button

