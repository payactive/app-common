// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import SplitButton, { SplitButtonInputProps } from '../input/SplitButton';

export default {
  title: 'Input/SplitButton',
  component: SplitButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<SplitButtonInputProps> = (args) => <SplitButton {...args} />;

export const NoOptions = Template.bind({});
NoOptions.args = {
  label: 'Create something',
  name: 'continue'
};

export const WithOptions = Template.bind({});
WithOptions.args = {
  label: 'New payment',
  name: "create_payment",
  onClick: (event) => {
    alert("You clicked the main button")
  },
  options: [
    {
      id: "import_payment",
      name: "Import payments"
    }
  ],
  onOptionClick: (option) => {
    console.log (option)
    alert(`"You click option ${option.name}""`)
  }
};