import {
  FormControl,
  FormControlProps, FormHelperText, InputLabel,
  makeStyles,
  MenuItem, Select,
  SelectProps
} from '@material-ui/core';
import { useField } from 'formik';
import { at } from 'lodash';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

interface Data {
  label: string,
  value: string
}

interface Props {
  data: Data[],
  name: string,
  icon?: string
}

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

const SelectField: React.FC<Props & SelectProps & FormControlProps> = ({ name, icon, className, label, data, ...rest }) => {

  const classes = useStyles()

  const [field, meta] = useField(name);
  const { value: selectedValue } = field;
  const [touched, error] = at(meta, 'touched', 'error');
  const isError = touched && error && true;
  function _renderHelperText(): React.ReactElement | null {
    if (isError) {
      return <FormHelperText>{error}</FormHelperText>
    } else {
      return null
    }
  }

  return (

    <Grid className={className} container spacing={1} alignItems={error ? 'center' : 'flex-end'}>
      {icon &&
        <Grid item xs={1}>
          <Icon className={classes.icon}>{icon}</Icon>
        </Grid>
      }
      <Grid item xs={icon ? 11 : 12}>
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

      </Grid>
    </Grid>

  );
}

export default SelectField;