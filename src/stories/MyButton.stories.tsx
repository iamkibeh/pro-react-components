import React from 'react';
import { Meta , StoryObj} from '@storybook/react';

import { MyButton } from '../components/Button';
import { ButtonProps } from '@mui/material';

export default {
    title: 'MyButton',
    component: MyButton,
    tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof MyButton>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'contained',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'contained',
    color: 'secondary',
  },
};


export const Large: Story = {
  args: {
    children: 'Large Button',
    variant: 'contained',
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    variant: 'contained',
    size: 'small',
  },
};

export const Outlined: Story = {
  args: {
    children: 'Outlined Button',
    variant: 'outlined',
  },
};

export const Text: Story = {
  args: {
    children: 'Text Button',
    variant: 'text',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};


export const Success: Story = {
  args: {
    children: 'Success Button',
    variant: 'outlined',
    color: 'success'
  },
};

export const Error: Story = {
  args: {
    children: 'Error Button',
    variant: 'outlined',
    color: 'error'
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning Button',
    variant: 'outlined',
    color: 'warning'
  },
};