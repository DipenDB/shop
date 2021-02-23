
import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity,ImageBackground} from "react-native";
import { FontAwesome  } from '@expo/vector-icons';
import COLOR from '../color';


const DescriptionPage=({product})=>{
    return(
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={{uri: product.imageUrl }}/>
            <TouchableOpacity style={styles.addToCart}>
                <FontAwesome name="cart-plus" size={34} color={COLOR.white} />
            </TouchableOpacity>
            <View style={styles.productDetail}>
                <Text style={styles.title}>{product.name}</Text>
                <Text numberOfLines={2} ellipsizeMode='tail'  style={styles.subtitle}>{product.description}</Text>
                <Text numberOfLines={2} ellipsizeMode='tail'  style={styles.subtitle}>{product.category}</Text>
                <Text style={styles.price}>$ {product.price}</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buyNow}>BUY NOW</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:5,
    },
    button:{
        marginTop:20,
        backgroundColor:COLOR.primary,
        height: 50,
        width: 150,
        borderRadius: 10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
    },
    buyNow:{
        fontSize:25,
        color:COLOR.white,
        fontWeight:'bold',
    },
    image:{
        marginTop: 20,
        width: '100%',
        height: 400,
        // borderRadius: 30,
        borderRadius: 20,
        overflow: 'hidden'
    },
    price:{
        color:COLOR.primary,
        fontSize:20,
        fontWeight: 'bold',
    },
    productDetail:{
        padding: 5,
        marginHorizontal:10,
    },


    addToCart:{
      position:'absolute',
        right:25,
        marginTop: 40,
    },
    subtitle:{
        // fontWeight:'bold',
        fontSize:16,
        color:COLOR.secondary,

    },
    title:{
        fontWeight:'bold',
        fontSize:25,
        color:COLOR.primary,
    },

})

export default DescriptionPage;
