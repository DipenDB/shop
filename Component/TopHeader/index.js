
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Modal} from 'react-native';
import COLOR from '../color';
import {FontAwesome5, AntDesign, FontAwesome} from '@expo/vector-icons';
import AddProduct from "../AddProduct";
import Filter from "../Filter";
import Home from "../Home";


const TopHeader=()=>{
    const [isOpen,setIsOpen]=React.useState(false);

    return(
        <View style={styles.container}>

            <TouchableOpacity>
                <FontAwesome5 name="list" size={20} color="white" />
            </TouchableOpacity>





            <Text style={styles.headerText}>SHOP</Text>

            <TouchableOpacity>
                <AntDesign onPress={()=>setIsOpen(true)} name="filter" size={20} color="white" />
            </TouchableOpacity>


            {/*-----------------------------------------Modal----------------------------------------------------------*/}

            <Modal visible={isOpen}>
                <View style={styles.modelContainer}>
                    <View style={styles.iconPosition}>

                        <FontAwesome style={{color:'red'}} onPress={()=>setIsOpen(false)} name="close" size={24} color="black" />
                        {/*<Ionicons  onPress={()=>setIsOpen(false)} name="ios-arrow-back-circle-sharp" size={45} color="red" />*/}
                    </View>
                    <Filter/>
                </View>
            </Modal>

        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        height:45,
        width:'100%',
        backgroundColor:COLOR.primary,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    modelContainer:{
        flex: 1,
    },
    headerText:{
        fontSize:15,
        fontWeight:'bold',
        color:'white',
    },
    iconPosition:{
        alignItems:'flex-end',
        right:15,
        top:15,
    },

})

export default TopHeader;
