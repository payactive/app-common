// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Button, { ButtonInputProps } from '../input/Button';

export default {
  title: 'Input/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonInputProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Weiter',
  name: 'continue'
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Weiter',
  disabled: true
};

export const Loading = Template.bind({});
Loading.args = {
  label: 'Weiter',
  loading: true
};