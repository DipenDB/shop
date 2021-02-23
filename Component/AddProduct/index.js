import React,{useState} from 'react';
import {StyleSheet,View,Text,TextInput,TouchableOpacity,Picker} from 'react-native';
import COLOR from '../color';
import {CATEGORIES} from "../data";

const AddProduct=(props)=>{
    const [value, onChangeText] = React.useState('');


    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [category, setcategory] = useState("");



    return(
        <View style={styles.container}>
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:20,}}>
                <Text style={styles.title}>Add Product</Text>
            </View>
            <TextInput
                style={styles.input}
                maxLength={20}
                onChangeText={text => setTitle(text)}
                autoCapitalize='words'
                placeholder='Add Title Here'
                value={title}
            />
            <TextInput
                style={styles.input}
                onChangeText={text => setDescription(text)}
                autoCapitalize='words'
                placeholder='Add Description Here'
                value={description}
            />
            <TextInput
                style={styles.input}
                onChangeText={text => setPrice(text)}
                autoCapitalize='words'
                placeholder='Set Price Here'
                value={price}
            />

            <TextInput
                style={styles.input}
                onChangeText={text => setImageUrl(text)}
                autoCapitalize='words'
                placeholder='Image URL Here'
                value={imageUrl}
            />

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




            <TouchableOpacity style={styles.button} onPress={()=>props.addProductButton({title,description,price,imageUrl,category})}>
                <Text style={{...styles.title,color:'white',fontSize: 20,}}>Add</Text>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        marginHorizontal:20,
        marginVertical:20,
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
    input:{
        height: 40,
        borderColor: COLOR.primary,
        borderWidth: 1,
        borderRadius:10,
        paddingHorizontal:20,
        marginTop:20,
    },
    title:{
        fontSize:30,
        fontWeight:'bold',
        color:COLOR.secondary,
    },
})
export default AddProduct;
