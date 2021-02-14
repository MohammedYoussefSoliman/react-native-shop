import React from 'react';
import {FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';

const ProductOverviewScreen = props => {

    const products = useSelector(state => state.products.availableProducts)
    return (
        <FlatList
        data={products}
        keyExtractor={item=>item.id}
        renderItem={itemData => <ProductItem title={itemData.item.title}
                                            price={itemData.item.price}
                                            image={itemData.item.imageUrl}
                                                                    />} />
    )
}

ProductOverviewScreen.navigationOptions = {
    headerTitle: 'All Products'
}

export default ProductOverviewScreen