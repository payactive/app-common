
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Alert, { AlertProps } from '../alerts/Alert';

export default {
  title: 'Feedback/Alerts',
  component: Alert,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

interface StoryProps {
  message: string
}

const Template: Story<AlertProps & StoryProps> = ({message, ...rest}) => <Alert onClose={()=>console.log('juhu')} {...rest}>{message}</Alert>;


export const Success = Template.bind({});
Success.args = {
  severity: 'success',
  message: "This is a success",
}

export const Warning = Template.bind({});
Warning.args = {
  severity: 'warning',
  message: "This is a warning",
}

export const Error = Template.bind({});
Error.args = {
  severity: 'error',
  message: "This is an error",
}
