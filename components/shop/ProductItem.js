import React from 'react';
import {View, Text, Image, StyleSheet, Button, Platform, TouchableOpacity, TouchableNativeFeedback} from 'react-native';
import Colors from '../../constants/colors';

const ProductItem = ({image, title, price, onViewDetails, onAddToCart}) => {
    let TouchableComp;
    if(Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComp = TouchableNativeFeedback
    }else{
        TouchableComp = TouchableOpacity
    }
    return <View style={styles.product}>        
            <TouchableComp onPress={onViewDetails}>
            <View style={styles.imgContainer}>
                <Image 
                style={styles.img}
                source={{
                    uri: image
                }}/>
            </View>
            </TouchableComp>
            <View style={styles.details}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price.toFixed(2)}</Text>
            </View>
            <View style={styles.actions}>
                <Button
                    color={Colors.primary}
                    title="View Details"
                    onPress={onViewDetails}/>
                <Button
                    color={Colors.primary}
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
        margin: 20,
        overflow: 'hidden'
    },
    imgContainer: {
        height: '60%'
    },
    img: {
        width: '100%',
        height: '100%'
    },
    details: {
        height: "15%",
        alignItems: 'center',
        padding: 10
    },
    title: {
        fontFamily: 'Sarabun-Bold',
        fontSize: 18,
        marginVertical: 4,
    },
    price: {
        fontFamily: 'Sarabun-Medium',
        fontSize: 14,
        color: "#888",
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: "25%"
    }
})

