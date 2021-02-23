

import React from 'react';
import {StyleSheet, Text, View, Modal, TouchableOpacity,ScrollView,FlatList} from 'react-native'
import AddProduct from "./AddProduct";
import { FontAwesome ,Ionicons} from '@expo/vector-icons';
import COLOR from './color';
import TopHeader from "./TopHeader";
import ProductList from "./ProductList";
import {DATA} from "./data";
import Home from "./Home";
import uuid from 'react-native-uuid';


const Main =()=>{

    const [isOpen,setIsOpen]=React.useState(false);
    const [newData,setNewData]=React.useState([
        {
            id:0,
            category:'Iphone',
            name:"iPhone 6S",
            description:"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
            imageUrl: 'https://fdn.gsmarena.com/imgroot/news/19/10/iphone-6s-service-program/-1220x526/gsmarena_001.jpg',
            price:799,
        },
        {
            id:1,
            category:'Iphone',
            name:"iPhone 5S",
            description:"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
            imageUrl:"https://photos5.appleinsider.com/gallery/24146-31339-0-28048-22786-27977-170912-iPhoneX-l-l-l.jpg",
            price:349
        },
        {
            id:2,
            name:"Macbook",
            category:'Macbook',
            description:"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
            imageUrl:"https://www.bhphotovideo.com/images/images2500x2500/apple_z0x1_mvfh_05_bh_13_3_macbook_air_with_1492907.jpg",
            price:1499
        },
        {
            id:3,
            name:"Macbook Air",
            category:'Macbook',
            description:"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
            imageUrl:"https://cdn.mos.cms.futurecdn.net/HvjfsxzQHCZxpUYTVgyBDM.jpg",
            price:999
        },
        {
            id:4,
            category:'Macbook',
            name:"Macbook Air 2013",
            description :"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
            imageUrl:"https://sm.mashable.com/t/mashable_in/review/m/macbook-ai/macbook-air-late-2020-review-the-one-with-apple-silicon-insi_2quc.960.jpg",
            price:599
        },
        {
            id:5,
            category:'Macbook',
            name:"Macbook Air 2012",
            description:"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
            imageUrl:"https://cdn.vox-cdn.com/thumbor/KoHueud28ijG7x1ip1llIaDY-WM=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/67817284/vpavic_4291_20201113_0366.0.0.jpg",
            price:499
        }
    ]);


    const handelSubmitOk=(data)=>{
        // console.log(uuid.v4());
        // console.log(DATA);

        // setNewData([...newData,
        //     {
        //         id:uuid.v4(),
        //         name:'Samsung Galaxy Note 20',
        //         description:"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
        //         imageUrl:'https://media.wired.com/photos/6008b7cd103a85a519187c3e/4:3/w_2400,c_limit/Gear-galaxys21_plus_phantom_silver_front.jpg',
        //         price:400,
        //     }
        //     ])
        // console.log(data);

        // setNewData([{...DATA},{...newData,id:uuid.v4()}])
        // setNewData(DATA)

        // setDATA([{...data,id:uuid.v4()},...todos])


        setNewData([...newData],{...data,id:Math.random()})

        setIsOpen(false)
    }

    return(
        <View style={styles.container}>
            <TopHeader/>


                <Home DATA={newData}/>







            {/*-------------------------------------------Add Product + Model Open ---------------------------------------------------------*/}
            {/*<FontAwesome onPress={()=>setIsOpen(true)} name="address-card" size={24} color="black" />*/}
            <View style={styles.position}>
                <TouchableOpacity  onPress={()=>setIsOpen(true)} elevation={5} style={styles.circle}>
                    <FontAwesome name="plus" size={25} color="white" />
                </TouchableOpacity>
            </View>

            <Modal visible={isOpen}>
                <View style={styles.modelContainer}>
                    <View style={styles.iconPosition}>
                        <FontAwesome style={{color:'red'}} onPress={()=>setIsOpen(false)} name="close" size={24} color="black" />
                        {/*<Ionicons  onPress={()=>setIsOpen(false)} name="ios-arrow-back-circle-sharp" size={45} color="red" />*/}
                    </View>
                    <AddProduct cancel={()=>setIsOpen(false)} addProductButton={handelSubmitOk}/>
                </View>
            </Modal>


        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:30,
    },
    modelContainer:{
        flex: 1,
    },
    circle:{
        width:45,
        height:45,
        borderRadius:20,
        backgroundColor:COLOR.primary,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    iconPosition:{
        alignItems:'flex-end',
        right:15,
        top:15,
    },

    position:{
        // position:'absolute',
        flex:1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        bottom: 30,
        marginRight:30,
    }
})

export default Main;
