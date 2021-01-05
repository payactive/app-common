import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import InputField, { InputFieldProps } from '../input/InputField';
import { TextFieldProps } from '@material-ui/core';
import Form from './Form';

export default {
  title: 'Examples/Form',
  component: InputField,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<undefined> = (args) => (
    <Form />
);

export const Login = Template.bind({});

