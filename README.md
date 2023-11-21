# Pro React Components

## Introduction

This project includes custom components built using ReactJs. It includes the following components:

- Custom Button
- Custom Modal
- Custom Table
- Custom Input
- Custom Stepper
- Custom Loaders
- Error Page

## Installation

To install this project, run the following command:

```bash
npm install pro-react-components
```

## Usage

To use this project, import the components you want to use in your project as follows:

```javascript
import {
  MyButton,
  LButton,
  Table,
  CircularLoader,
  BarLoader,
  CustomModal,
  CustomStepper,
  ErrorPage,
} from 'pro-react-components'
```

## Example

```javascript
import React from 'react'
import {
  MyButton,
  LButton,
  Table,
  CircularLoader,
  BarLoader,
  CustomModal,
  CustomStepper,
  ErrorPage,
} from 'pro-react-components'

const App = () => {
  return (
    <div>
      <MyButton 
        variant="contained"
        color="primary"
        onClick={() => console.log('Button clicked')}
      />
      <LButton 
        variant="contained"
        color="primary"
        onClick={() => console.log('Button clicked')}
      />
      <Table
        columns={[
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
        ]}
        data={[
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
        ]}
        showSearch={true}
        title={'Users'}
        buttons={[
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
        ]}
        onRowClicked={(row) => console.log(row)}
      />
      <CircularLoader />
      <BarLoader />
      <CustomModal />
      <CustomStepper />
      <ErrorPage />
    </div>
  )
}

export default App
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. If you would like to contribute to this project, please fork this repository and make changes as you'd like. Pull requests are warmly welcome.

Please make sure to update tests as appropriate.

## Author

[Kibet Immanuel Ng'eno](https://github.com/iamkibeh)

## Versioning

This is the first version of this project.

## License

This project is licensed under the MIT License.[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgments

- [React](https://reactjs.org/)
- [NPM](https://www.npmjs.com/)
- [Stack Overflow](https://stackoverflow.com/)
- [Google](https://www.google.com/)
- [Youtube](https://www.youtube.com/)
