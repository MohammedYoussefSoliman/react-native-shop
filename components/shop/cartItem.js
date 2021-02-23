import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const CartItem = ({quantity, title, amount, onRemove}) => {

    return (
        <View style={styles.cartItem}>
            <Text style={styles.itemData}>
                <Text style={styles.mainTxt}>{quantity} </Text>
                <Text style={styles.mainTxt}>{title}</Text>
            </Text>
            <View style={styles.itemData}>
                <Text style={styles.amount}>{amount.toFixed(2)}</Text>
                <TouchableOpacity
                    style={styles.deleteBtn}
                    onPress={onRemove}>
                    <Ionicons
                        name={Platform.OS === 'android' ?
                        'md-trash' : 'ios-trash'}
                        size={23}
                        color="red" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cartItem: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    itemData: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    mainTxt: {
        fontFamily: 'Sarabun-Medium',
        fontSize: 16,
        color: "#888",

    },
    deleteBtn: {
        marginLeft: 20
    },
})

export default CartItem