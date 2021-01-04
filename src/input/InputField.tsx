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
}

const InputField: React.FC<InputFieldProps & TextFieldProps> = ({ name, label, placeholder, id, icon, error, ...rest }) => {

    const classes = useStyles()

    return (
        <div className={classes.margin}>
            <Grid container spacing={1} alignItems={error ? 'center' : 'flex-end'}>
                {icon &&
                    <Grid item>
                        <Icon className={classes.icon}>{icon}</Icon>
                    </Grid>
                }
                <Grid item>
                    <TextField
                        id={id || name}
                        label={label || name}
                        placeholder={placeholder}
                        error={error}
                        {...rest} />
                </Grid>
            </Grid>
        </div>
    );
}

export type { InputFieldProps }
export default InputField