import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';

const ProductOverviewScreen = ({navigation}) => {

    const products = useSelector(state => state.products.availableProducts)
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
                })}} />)} />
    )
}

ProductOverviewScreen.navigationOptions = {
    headerTitle: 'All Products'
}

export default ProductOverviewScreen