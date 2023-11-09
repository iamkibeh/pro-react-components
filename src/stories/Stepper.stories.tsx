import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {CustomStepper} from '../components/Stepper';

const meta: Meta<typeof CustomStepper> = {
  component: CustomStepper,
};

export default meta;

type Story = StoryObj<typeof CustomStepper>;

export const Basic: Story = {args: {
  activeStep: 0,
  steps: [
    {
      content: <div>Step 1</div>,
      title: 'Step 1',
      icon: <div>1</div>,
      subtitle: 'Subtitle 1'
    },
    {
      content: <div>Step 2</div>,
      title: 'Step 2',
      icon: <div>2</div>,
      subtitle: 'Subtitle 2'
    },
    {
      content: <div>Step 3</div>,
      title: 'Step 3',
      icon: <div>3</div>,
      subtitle: 'Subtitle 3'
    },
    {
      content: <div>Step 4</div>,
      title: 'Step 4',
      icon: <div>4</div>,
      subtitle: 'Subtitle 4'
    },
    {
      content: <div>Step 5</div>,
      title: 'Step 5',
      icon: <div>5</div>,
      subtitle: 'Subtitle 5'
    },
    {
      content: <div>Step 6</div>,
      title: 'Step 6',
      icon: <div>6</div>,
      subtitle: 'Subtitle 6'
    },
  
  ]
}};
