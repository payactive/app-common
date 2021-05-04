import { Grid, makeStyles, TextField, TextFieldProps } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import React from 'react';

const useStyles = makeStyles((theme) => (
    {
        margin: {
            margin: theme.spacing(1),
        },
        icon: {
            color: theme.palette.primary.main,
            verticalAlign: 'top'

        }
    }));

interface InputFieldProps {
    name: string
    label?: string
    id?: string
    placeholder?: string
    icon?: string
    max?: number
}

const InputField: React.FC<InputFieldProps & TextFieldProps> = ({ name, className, label, placeholder, id, icon, max, error, ...rest }) => {

    const classes = useStyles()

    return (

        <Grid className={className} container spacing={1} alignItems={error ? 'center' : 'flex-end'}>
            {icon &&
                <Grid item xs={1}>
                    <Icon className={classes.icon}>{icon}</Icon>
                </Grid>
            }
            <Grid item xs={icon ? 11 : 12}>
                <TextField                    
                    id={id || name}
                    label={label || name}
                    placeholder={placeholder}
                    error={error}
                    inputProps={{ maxLength: max }}
                    {...rest} />
            </Grid>
        </Grid>

    );
}

export type { InputFieldProps }
export default InputField