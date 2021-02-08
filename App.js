import React from 'react';
import { Text, View } from 'react-native';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import productsReducer from './store/reducers/products'

export default function App() {

  const rootReducer = combineReducers({
    products: productsReducer
  });

  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <View>
        <Text>ampty app</Text>
      </View>
    </Provider>
  );
}