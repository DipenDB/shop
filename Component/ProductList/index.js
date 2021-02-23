
import React from 'react';
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView, Image, Modal} from 'react-native';
import COLOR from '../color';
import {FontAwesome} from "@expo/vector-icons";

import DescriptionPage from "../DescriptionPage";


const ProductList=({product})=>{

    const [isOpen,setIsOpen]=React.useState(false);

    return(
        <View>
            <TouchableOpacity onPress={()=>setIsOpen(true)} style={styles.container}>
                <Image style={styles.image} source={{uri: product.imageUrl }}/>

                <View style={styles.detail}>
                    <View>
                        <Text style={styles.title}>{product.name}</Text>
                        <Text numberOfLines={1}  style={styles.subTitle}>{product.description}</Text>
                        <Text style={styles.amount}>$ {product.price}</Text>
                    </View>

                    {/*<TouchableOpacity style={styles.button}>*/}
                    {/*    <Text style={{...styles.title, fontSize:18,color:'white'}}>BUY NOW</Text>*/}
                    {/*</TouchableOpacity>*/}
                </View>
            </TouchableOpacity>


            {/*-----------------------------------------Modal----------------------------------------------------------*/}

            <Modal visible={isOpen}>
                <View style={styles.modelContainer}>
                    <View style={styles.iconPosition}>
                        <FontAwesome style={{color:'red'}} onPress={()=>setIsOpen(false)} name="close" size={24} color="black" />
                        {/*<Ionicons  onPress={()=>setIsOpen(false)} name="ios-arrow-back-circle-sharp" size={45} color="red" />*/}
                    </View>
                    <DescriptionPage cancel={()=>setIsOpen(false)}  product={product}/>
                </View>
            </Modal>


        </View>


    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        paddingHorizontal:20,
        height:300,
        width:'100%',
        borderRadius:10,
        backgroundColor:COLOR.lightBlack,
    },
    amount:{
        color:COLOR.primary,
        fontSize:30,
        fontWeight:'bold',
    },
    button:{
        height:50,
        margin:20,
        padding: 10,
        backgroundColor: COLOR.primary,
        borderRadius:10,

    },
    iconPosition:{
        alignItems:'flex-end',
        right:15,
        top:15,
    },

    image:{
        marginTop: 20,
        width: '100%',
        height: 170,
        borderRadius: 10,
    },
    detail:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal: 5,
        marginTop:10,
    },
    modelContainer:{
        flex: 1,
    },

    subTitle:{
        fontSize:17,
        // fontWeight:'bold',
        color:COLOR.secondary,
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        color:COLOR.black,
    },
})

export default ProductList;
