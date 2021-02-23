import React from 'react';
import {FlatList,StyleSheet} from 'react-native';
import ProductList from "../ProductList";

const Home=({DATA})=>{
    return(
        <FlatList
            data={DATA}
            // keyExtractor={(item)=>item.id}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item})=>(
                <ProductList product={item}/>
            )}
        />
    )
}

const styles=StyleSheet.create({

})

export default Home;
