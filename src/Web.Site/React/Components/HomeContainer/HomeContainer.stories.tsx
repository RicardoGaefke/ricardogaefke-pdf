import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
// eslint-disable-next-line no-unused-vars
import { action, HandlerFunction } from '@storybook/addon-actions';
import MyThemeHoc from '../../Initial/Theme/StoryBookHOC';
import HomeContainer from './HomeContainer';
import Form from '../Home/Form/Form.Context';

const App = (): React.ReactElement => (
  <MyThemeHoc>
    <HomeContainer>
      <div>Content</div>
    </HomeContainer>
  </MyThemeHoc>
);

const AppWithForm = (): React.ReactElement => (
  <MyThemeHoc>
    <HomeContainer>
      <Form />
    </HomeContainer>
  </MyThemeHoc>
);

storiesOf('HomeContainer', module)
  .addDecorator((story: any): React.ReactElement => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): React.ReactElement => withConsole()(storyFn)(context))
  .add('Basic', (): React.ReactElement => (
    <App />
  ))
  .add('With Form', (): React.ReactElement => (
    <AppWithForm />
  ));
