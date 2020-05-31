import React from 'react';
import Routermain from "./routes/routermain";
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';

const { persistor, store } = configureStore()

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
       <Routermain />
      </PersistGate>
    </Provider>
  );
}

export default App;

