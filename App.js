import React from 'react';
// import 'react-native-gesture-handler';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import productsReducer from './store/reducers/products';
import ShopNavigator from './navigation/shopNavigator'

export default function App() {

  const rootReducer = combineReducers({
    products: productsReducer
  });

  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}