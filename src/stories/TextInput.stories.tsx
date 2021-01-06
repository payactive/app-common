import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import InputField, { InputFieldProps } from '../input/InputField';
import { Container, TextFieldProps } from '@material-ui/core';

export default {
  title: 'Input/InputField',
  component: InputField,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<InputFieldProps & TextFieldProps> = (args) =>
  <Container maxWidth='xs'>
    <InputField {...args} />
  </Container>


export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: 'account_circle',
  name: 'User Name',
};

export const WithIconAndError = Template.bind({});
WithIconAndError.args = {
  icon: 'account_circle',
  name: 'User Name',
  defaultValue: "Wrong user name",
  error: true,
  helperText: "this is an error"
};


export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  name: 'Button',
};

export const WithoutIconAndError = Template.bind({});
WithoutIconAndError.args = {
  name: 'User Name',
  defaultValue: "Wrong user name",
  error: true,
  helperText: "this is an error"
};