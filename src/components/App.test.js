import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import AppContainer from './AppContainer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Provider store={mockStore()}>
      <AppContainer />
    </Provider>, div);

  ReactDOM.unmountComponentAtNode(div);
});
