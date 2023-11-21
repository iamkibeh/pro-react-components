import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Table from '../components/Table'

const meta: Meta<typeof Table> = {
  component: Table,
}

export default meta

type Story = StoryObj<typeof Table>

export const Basic: Story = {
  args: {
    columns: [
      {
        name: 'Name',
        selector: 'name',
      },
      {
        name: 'Email',
        selector: 'email',
      },
      {
        name: 'Age',
        selector: 'age',
      },
    ],

    data: [
      {
        name: 'John',
        email: 'johndoe@gmail.com',
        age: 25,
      },
      {
        name: 'Jane',
        email: 'jane@gmail.com',
        age: 22,
      },
      {
        name: 'Jack',
        email: 'jack@gmail.com',
        age: 27,
      },
      {
        name: 'Janice',
        email: 'janice@gmail.com',
        age: 30,
      },
      {
        name: 'Judy',
        email: 'judy@gmail.com',
        age: 28,
      },
      {
        name: 'Jill',
        email: 'jill@gmail.com',
        age: 35,
      },
      {
        name: 'Joe',
        email: 'joe@gmail.com',
        age: 32,
      },
    ],
    showSearch: true,
    title: 'Users',
    buttons: [
      {
        children: 'Add',
        variant: 'contained',
        color: 'primary',
        onClick: () => console.log('Add clicked'),
      },
      {
        children: 'Delete',
        variant: 'contained',
        color: 'error',
        onClick: () => console.log('Delete clicked'),
      },
    ],
    onRowClicked: (row) => console.log(row),
  },
}



export const NoData: Story = {
  args: {
    columns: [
      {
        name: 'Name',
        selector: 'name',
      },
      {
        name: 'Email',
        selector: 'email',
      },
      {
        name: 'Age',
        selector: 'age',
      },
    ],
    data: [],
    showSearch: true,
    onRowClicked: (row) => console.log(row),
  },
}

