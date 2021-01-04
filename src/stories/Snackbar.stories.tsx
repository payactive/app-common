
import Snackbar, { SnackbarProps } from '@material-ui/core/Snackbar';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Alert, { AlertProps } from '../alerts/Alert';

export default {
  title: 'Feedback/Snackbars',
  component: Snackbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

interface StoryProps {
  message: string  
}

const Template: Story<SnackbarProps & AlertProps & StoryProps> = ({ message, severity, ...rest }) =>
  <>
    <Snackbar open={true} onClose={() => console.log("click")} {...rest}>
      <Alert onClose={() => alert("Clicked on closed alert")} severity={severity} >{message}</Alert>
    </Snackbar>
  </>

export const Success = Template.bind({});
Success.args = {
  severity: 'success',
  message: "This is a success",
};

export const Warning = Template.bind({});
Warning.args = {
  severity: 'warning',
  message: "This is a warning",
};

export const Error = Template.bind({});
Error.args = {
  severity: 'error',
  message: "This is an error",
};


