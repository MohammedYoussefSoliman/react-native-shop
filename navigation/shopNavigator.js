import {createStackNavigator} from 'react-navigation';
import {Platform} from 'react-native';
import ProductOverviewScreen from '../screens/shop/productOverViewScreen';
import Colors from '../constants/colors';

const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductOverviewScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform === 'android' ? 'white' : Colors.primary
    }
})