import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {useFonts, loadAsync} from 'expo-font';

// import { useFonts,
//   Sarabun_400Regular,
//   Sarabun_500Medium,
//   Sarabun_600SemiBold,
//   Sarabun_700Bold  } from '@expo-google-fonts/sarabun';

import AppLoading from 'expo-app-loading';
import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';

import ShopNavigator from './navigation/shopNavigator'

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  const fetchFonts = ()=> {
    return loadAsync({
      'Sarabun-Bold': require('./assets/fonts/Sarabun-Bold.ttf'),
      'Sarabun-Medium': require('./assets/fonts/Sarabun-Medium.ttf'),
      'Sarabun-Regular': require('./assets/fonts/Sarabun-Regular.ttf'),
      'Sarabun-Light': require('./assets/fonts/Sarabun-Light.ttf')
    })
  }

  // const [loadedFont] = useFonts({
  //     Sarabun_400Regular,
  //     Sarabun_500Medium,
  //     Sarabun_600SemiBold,
  //     Sarabun_700Bold
  // })

  const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
  });

  const store = createStore(rootReducer);

  if(!fontLoaded) {
   return <AppLoading
    startAsync={fetchFonts}
    onFinish={()=>setFontLoaded(true)}
    onError={console.error}/>
  }

  return <Provider store={store}>
          <ShopNavigator />
        </Provider>


}