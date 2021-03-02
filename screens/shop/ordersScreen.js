import React from 'react';
import {FlatList, Text, Platform} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderBtn from '../../components/UI/headerButton/headerButton';
import {useSelector} from 'react-redux';

import OrderItem from '../../components/shop/orderItem';

export const OrdersScreen = () => {

    const orders = useSelector(state => state.orders.orders)

    return <FlatList
                data={orders}
                keyExtractor={item=>item.id}
                renderItem={itemData=><OrderItem 
                    amount={itemData.item.totalAmount}
                    date={itemData.item.readableDate}
                />} />
}

OrdersScreen.navigationOptions = navData => {
    return {
        headerTitle: "Orders",
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderBtn}>
                <Item 
                    title="Orders"
                    iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                    onPress={()=>{navData.navigation.toggleDrawer()}}/>
            </HeaderButtons>
        )

    }
}

export default OrdersScreen