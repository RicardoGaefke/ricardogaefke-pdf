import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
// eslint-disable-next-line no-unused-vars
import { action, HandlerFunction } from '@storybook/addon-actions';
import MyThemeHoc from '../../Initial/Theme/StoryBookHOC';
import HomeContainer from '../HomeContainer/HomeContainer';
import Document from './Document';

const App = (): React.ReactElement => (
  <MyThemeHoc>
    <HomeContainer>
      <Document href="https://localhost:5001/api/show/e1161195-ca29-4cbf-8c35-09e020d57f0f/eng/report.pdf" />
    </HomeContainer>
  </MyThemeHoc>
);

storiesOf('Document', module)
  .addDecorator((story: any): React.ReactElement => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): React.ReactElement => withConsole()(storyFn)(context))
  .add('Basic', (): React.ReactElement => (
    <App />
  ));
