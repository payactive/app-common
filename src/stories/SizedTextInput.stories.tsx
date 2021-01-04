import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import SizedInputField, {SizedInputFieldProps}  from '../input/SizedInputField';
import { InputFieldProps } from '../input/InputField';
import { TextFieldProps } from '@material-ui/core';



export default {
  title: 'Input/SizedInputField',
  component: SizedInputField,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<SizedInputFieldProps & InputFieldProps & TextFieldProps> = (args) => <SizedInputField {...args} />;

export const WithIcon = Template.bind({});
WithIcon.args = {
  max: 20,
  icon: 'account_circle',
  name: 'User Name',  
};

export const WithIconAndError = Template.bind({});
WithIconAndError.args = {
  max: 20,
  icon: 'account_circle',
  name: 'User Name',  
  defaultValue: "Wrong user name",
  error: true,
  helperText: "this is an error"
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  max: 20,
  name: 'Button',
};

export const WithoutIconAndError = Template.bind({});
WithoutIconAndError.args = {
  max: 20,
  name: 'User Name',
  defaultValue: "Wrong user name",
  error: true,
  helperText: "this is an error"
};

