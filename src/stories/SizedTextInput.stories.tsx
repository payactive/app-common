import { Container, TextFieldProps } from '@material-ui/core';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { InputFieldProps } from '../input/InputField';
import SizedInputField, { SizedInputFieldProps } from '../input/SizedInputField';

export default {
  title: 'Input/SizedInputField',
  component: SizedInputField,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<SizedInputFieldProps & InputFieldProps & TextFieldProps> = (args) =>
  <Container maxWidth='xs'>
    <SizedInputField {...args} />
  </Container>


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

