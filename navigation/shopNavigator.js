import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {Platform} from 'react-native';
import ProductOverviewScreen from '../screens/shop/productOverViewScreen';
import ProductDetailsScreen from '../screens/shop/productDetailsScreen';
import CartScreen from '../screens/shop/cartScreen';
import OrdersScreen from '../screens/shop/ordersScreen';
import Colors from '../constants/colors';

const navigationOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTitleStyle: {
        fontFamily: 'Sarabun-Bold'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    
}
const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductOverviewScreen,
    ProductDetails: ProductDetailsScreen,
    Cart: CartScreen,
}, {
    defaultNavigationOptions: navigationOptions
})

const OrdersNavigator = createStackNavigator({
    Orders: OrdersScreen
},
{
    defaultNavigationOptions: navigationOptions
})

const ShopNavigator = createDrawerNavigator({
    Products: ProductsNavigator,
    Orders: OrdersNavigator
    },
    {
    contentOptions: {
        activeTintColor: Colors.primary
    }
})

export default createAppContainer(ShopNavigator)
