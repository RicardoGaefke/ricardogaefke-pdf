import React from 'react';
// import { withFormik } from 'formik';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { MemoryRouter } from 'react-router';
import MyThemeHOC from '../../../Initial/Theme/StoryBookHOC';
import MyForm from './Form.Context';

const App = (): React.ReactElement => (
  <MyThemeHOC>
    <MyForm />
  </MyThemeHOC>
);

storiesOf('Form', module)
  .addDecorator((story: any): React.ReactElement => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): React.ReactElement => withConsole()(storyFn)(context))
  .add('Default', (): React.ReactElement => (
    <App />
  ));
