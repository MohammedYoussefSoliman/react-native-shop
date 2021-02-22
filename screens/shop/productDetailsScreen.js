import React from 'react';
import {ScrollView, View, Text, Image, Button, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import * as cartAction from '../../store/actions/cart';
import Colors from '../../constants/colors';
const ProductDetailsScreen = ({navigation}) => {
    const prodId = navigation.getParam('prodId');
    const product = useSelector(state=>state.products.availableProducts.find(prod => prod.id === prodId));
    const dispatch = useDispatch();

    return (
        <ScrollView>
            <Image
                style={styles.img}
                source={{uri: product.imageUrl}} />
            <View style={styles.actions}>
                <Button
                    color={Colors.primary}
                    title="aadd to cart"
                    onPress={()=>{dispatch(cartAction.addToCart(product))}}/>
            </View>
            <Text style={styles.price}>
                {product.price}
            </Text>
            <Text style={styles.desc}>
                {product.description}
            </Text>
        </ScrollView>
    )
}

ProductDetailsScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('prodTitle')
    }
}

const styles = StyleSheet.create({
    img: {
        width: "100%",
        height: 300
    },
    price: {
        fontSize: 20,
        fontFamily: 'Sarabun-Medium',
        color: "#888",
        textAlign: "center",
        marginVertical: 20
    },
    desc: {
        fontSize: 14,
        fontFamily: 'Sarabun-Regular',
        textAlign: "center",
    },
    actions: {
        alignItems: "center",
        marginVertical: 10
    }
})

export default ProductDetailsScreen