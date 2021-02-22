import React from 'react';
import {FlatList, Platform} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {useSelector, useDispatch} from 'react-redux';
import * as cartAction from '../../store/actions/cart';
import ProductItem from '../../components/shop/ProductItem';
import HeaderBtn from '../../components/UI/headerButton/headerButton';

const ProductOverviewScreen = ({navigation}) => {

    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();

    return (
        <FlatList
        data={products}
        keyExtractor={item=>item.id}
        renderItem={itemData => (
            <ProductItem
                title={itemData.item.title}
                price={itemData.item.price}
                image={itemData.item.imageUrl}
                onViewDetails={()=>{navigation.navigate("ProductDetails", {
                    prodId: itemData.item.id,
                    prodTitle: itemData.item.title
                })}} />)}
                onAddToCart={()=>{dispatch(cartAction.addToCart(itemData.item))}} />
    )
}

ProductOverviewScreen.navigationOptions = navData => {
    return {
        headerTitle: 'All Products',
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderBtn}>
                <Item 
                    title="Cart"
                    iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                    onPress={()=>{navData.navigation.navigate('Cart')}}/>
            </HeaderButtons>
        )
    }
}

export default ProductOverviewScreen