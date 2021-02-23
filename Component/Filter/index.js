
import React,{useState} from 'react';
import {StyleSheet, View, Text, Picker, TouchableOpacity, Modal} from "react-native";
import COLOR from "../color";
import {CATEGORIES} from "../data";
import {FontAwesome} from "@expo/vector-icons";
import DescriptionPage from "../DescriptionPage";
import ProductList from "../ProductList";
import FilterList from "../FilterList";
// import PickerItem from "react-native-web/dist/exports/Picker/PickerItem";

const Filter=()=>{

    const [isOpen, setIsOpen] = useState(false);
    const [category, setcategory] = useState("");

    // const handelFilter=(data)=>{
    //     console.log(data);
    //     setIsOpen(false)
    //
    // }

    return(
        <View style={styles.container}>
            <View style={styles.dropdown}>
                <Picker
                    mode='dialog'
                    style={{ height: 40,color: '#8a8a8a' }}
                    onValueChange={(itemValue, itemIndex) => setcategory(itemValue)}
                    selectedValue={category}
                >

                    <Picker.Item color='#aaa' label="Select Category" value={null} />

                    {
                        CATEGORIES.map((category,index)=>{
                            return(<Picker.Item key={category.id}  label={category.title} value={category.title} />)
                        })
                    }

                </Picker>
            </View>

            {/*<TouchableOpacity style={styles.button} onPress={()=>props.addProductButton({category})}>*/}
            <TouchableOpacity style={styles.button} onPress={()=>setIsOpen(true)}>
                <Text style={{...styles.title,color:'white',fontSize: 20,}}>Search</Text>
            </TouchableOpacity>

            <Modal visible={isOpen}>
                <View style={styles.modelContainer}>
                    <View style={styles.iconPosition}>
                        <FontAwesome style={{color:'red'}} onPress={()=>setIsOpen(false)} name="close" size={24} color="black" />
                        {/*<Ionicons  onPress={()=>setIsOpen(false)} name="ios-arrow-back-circle-sharp" size={45} color="red" />*/}
                    </View>
                    <FilterList cancel={()=>setIsOpen(false)}  category={category} />
                    {/*<DescriptionPage cancel={()=>setIsOpen(false)}  product={product}/>*/}
                </View>
            </Modal>


        </View>

    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        margin:10,
        marginTop:50,
    },
    button:{
        backgroundColor:COLOR.primary,
        marginTop: 20,
        height: 40,
        borderRadius: 10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',

    },
    dropdown:{
        width: '100%',
        marginTop: 15,
        // marginLeft:20,
        // marginRight:20,
        borderColor: COLOR.primary,
        // borderBottomWidth:1,
        paddingHorizontal: 10,
        height:40,
        borderWidth: 1,
        borderRadius: 10,
    },
    title:{
        fontSize:30,
        fontWeight:'bold',
        color:COLOR.secondary,
    },
})

export default Filter;
