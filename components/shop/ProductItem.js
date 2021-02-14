import React from 'react';
import {View, Text, Image, StyleSheet, Button, Platform} from 'react-native';

const ProductItem = ({image, Title, price, onViewDetails, onAddToCart}) => {
    return <View style={styles.product}>
        <Image 
        style={styles.img}
        source={{
            uri: image
        }}/>
        <Text style={styles.title}>{Title}</Text>
        <Text style={styles.price}>{price.toFixed(2)}</Text>
        <View style={styles.actions}>
            <Button
                title="View Details"
                onPress={onViewDetails}/>
            <Button
                title="To Cart"
                onPress={onAddToCart}/>
        </View>
    </View>
}

export default ProductItem

const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height:2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20
    },
    img: {
        width: '100%',
        height: '60%'
    },
    title: {
        fontSize: 18,
        marginVertical: 4
    },
    price: {
        fontSize: 14,
        color: "#888"
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})

