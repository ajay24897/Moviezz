import React, {useEffect} from 'react';

import MainRoute from './src/route/main.route';
import {Provider} from 'react-redux';
import store from './src/redux';
import {LogBox} from 'react-native';

function App() {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);
  return (
    <Provider store={store}>
      <MainRoute />
    </Provider>
  );
}

export default App;
