import React from 'react';
import {Provider} from 'react-redux';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import rootReducer from './src/store/index';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

import {SafeAreaView, LogBox} from 'react-native';

import Navigation from './src/navigation/navigation';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

let persistor = persistStore(store);

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};
export default App;
