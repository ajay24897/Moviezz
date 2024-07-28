import React from 'react';

import MainRoute from './src/route/main.route';
import {Provider} from 'react-redux';
import store from './src/redux';

function App() {
  return (
    <Provider store={store}>
      <MainRoute />
    </Provider>
  );
}

export default App;
