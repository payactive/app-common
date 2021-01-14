// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Paper } from '@material-ui/core';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import * as Yup from 'yup';
import FormikForm, { FormikFormProps } from '../formik/FormikForm';

export default {
  title: 'Examples/FormikForm',
  component: FormikForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<FormikFormProps> = (args) => (
  <Paper style={{ maxWidth: '300px', padding: '1em' }}>
    <FormikForm {...args} />
  </Paper>

);

export const LoginForm = Template.bind({});
LoginForm.args = {
  submit: {
    label: 'Login',
  },
  fields: [
    {
      label: 'Username',
      name: 'username',
      icon: 'account_circle',
      validation: Yup.string().required()

    },
    {
      label: 'Password',
      name: 'password',
      icon: 'lock',
      validation: Yup.string().required()
    }
  ]
}


