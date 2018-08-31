import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import AppContainer from './AppContainer';

const mockStore = configureMockStore();

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Provider store={mockStore()}>
      <AppContainer />
    </Provider>, div);

  ReactDOM.unmountComponentAtNode(div);
});
