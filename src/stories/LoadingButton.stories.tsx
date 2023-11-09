import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import {LButton} from '../components/Button';

type Story = StoryObj<typeof LButton>;

 export default {
    title: 'Loading Button',
    component: LButton,
    tags: ['autodocs'],
 }  as Meta;   


export const Loading: Story = {
  args: {
    children: 'Loading Button',
    loading: true,
  },
};


