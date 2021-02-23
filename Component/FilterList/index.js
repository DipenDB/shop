
import React from 'react';
import {Text, View, StyleSheet, Picker} from 'react-native';
import {FontAwesome} from "@expo/vector-icons";
import {CATEGORIES, DATA} from '../data'
import ProductList from "../ProductList";

const FilterList=({category})=>{
    console.log(category);

    return(
        <View style={styles.container}>

            {
               DATA.map((item,index)=>{
                   if(item.category===category) {
                       return (<ProductList key={item.id}  product={item}/>)
                   }
                })
            }

        </View>
    )
}

const styles=StyleSheet.create({
    iconPosition:{
        alignItems:'flex-end',
        right:15,
        top:15,
    },
    container:{ flex:1, padding:20,}
})

export default FilterList;
