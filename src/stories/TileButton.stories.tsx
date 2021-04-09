import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import TileButton, { TileButtonProps } from '../input/TileButton';

export default {
  title: 'Input/TileButton',
  component: TileButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<TileButtonProps> = (args) => <TileButton {...args} />;

export const SelectedWithIcon = Template.bind({});
SelectedWithIcon.args = {
  title: 'paperless',
  percent: '1,9',
  selected: true
};

export const SelectedWithOutIcon = Template.bind({});
SelectedWithOutIcon.args = {
  title: 'Expert',
  subTitle: '149 €',
  selected: true
};

export const NoSelectedWithIcon = Template.bind({});
NoSelectedWithIcon.args = {
  title: 'paperless',
  subTitle: 'basic',
  percent: '1,5',
};

export const NoSelectedWithOutIcon = Template.bind({});
NoSelectedWithOutIcon.args = {
  title: 'Growth', 
  subTitle: '69 €',
};


