import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};



// // MUI BUtton 

// import {MyButton} from '../components/Button'
// import type { Meta, StoryObj } from '@storybook/react';

// const meta: Meta<typeof MyButton> = {
//   component: MyButton,
//   argTypes: {
//     // 👇 All Button stories expect a label arg
//     label: {
//       control: 'text',
//       description: 'Overwritten description',
//     },
//     children: {
//       control: 'text'
//     }
//   },
// };

// // export default {
// //   title: 'My-Example/Button',
// //   component: MyButton,
// //   tags: ['autodocs'],
// //   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
// //   argTypes: {
// //     backgroundColor: { control: 'color' },
// //   },
// // }
// export default meta;

// type Story = StoryObj<typeof MyButton>;

// // export const Basic:Story = {
// //   argTypes: {
// //     // 👇 This story expects a label arg
// //     children: {
// //       control: 'my text',
// //       description: 'Overwritten description',
// //     },
// //   }
// // }

// export const Primary:Story = {
//   args: {
//     primary: true,
//     children: 'Button',
//   },
// };