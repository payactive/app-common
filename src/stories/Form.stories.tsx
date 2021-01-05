// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import InputField from '../input/InputField';
import Form from './LoginForm';
import RegistrationForm from './RegistrationForm';

export default {
  title: 'Examples/Form',
  component: InputField,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<undefined> = () => (
    <Form />
);
export const Login = Template.bind({});

const RegistrationTemplate: Story<undefined> = () => (
    <RegistrationForm />
);
export const Registration = RegistrationTemplate.bind({});

