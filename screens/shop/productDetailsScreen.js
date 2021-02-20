import React from 'react';
import {ScrollView, View, Text, Image, Button, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Colors from '../../constants/colors';
const ProductDetailsScreen = ({navigation}) => {
    const prodId = navigation.getParam('prodId');
    const product = useSelector(state=>state.products.availableProducts.find(prod => prod.id === prodId));
    return (
        <ScrollView>
            <Image
                style={styles.img}
                source={{uri: product.imageUrl}} />
            <View style={styles.actions}>
                <Button
                    color={Colors.primary}
                    title="aadd to cart"
                    onPress={()=>{}}/>
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
        color: "#888",
        textAlign: "center",
        marginVertical: 20,
        fontFamily: 'Sarabun-Medium'
    },
    desc: {
        fontSize: 14,
        textAlign: "center",
        fontFamily: 'Sarabun-Regular'
    },
    actions: {
        alignItems: "center",
        marginVertical: 10
    }
})

export default ProductDetailsScreen