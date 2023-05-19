import {
    Box,
    Image,
    View,
    Heading,
    Input,
    VStack,
    Button,
    Pressable,
    Text,
    Center,
    HStack,
  } from "native-base";
import React, { Component } from 'react'
import { SwipeListView } from "react-native-swipe-list-view";
import products from "../data/Product";
import Colors from "../Color";
import { FontAwesome } from "@expo/vector-icons";
import Mbutton from "./Mbutton";


const Swiper =() =>(
   <SwipeListView 
    rightOpenValue={-50}
    previewRowKey='0'
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={products}
    renderItem={randerItem}
    renderHiddenItem={randerhiddenItem}
    showsVerticalScrollIndicator={false}
    ></SwipeListView>
)

const randerItem=(data, rowMap)=>(
    <Pressable>
        <Box ml={6} mb={3}>
            <HStack alignItems="center" bg={Colors.white} shadow={1} rounded={10} overflow="hidden">
                <Center w="25%" bg={Colors.transparent}>
                    <Image source={{uri:data.item.img}} alt={data.item.name} w="full" h={24}
                    resizeMode="contain"
                    ></Image>
                </Center>
                <VStack w='60%' px={2} space={2}>
                  <Text isTruncated color={Colors.black} bold fontSize={14}>
                    {
                      data.item.name 
                    }
                  </Text>
                  <Text bold color={Colors.lightblack}>
                    ${data.item.price}
                  </Text>
                </VStack>
                
                <Center>
                  <Button bg={Colors.main} _pressed={{bg: Colors.main}} _text={{color: Colors.white}}>
                    5
                  </Button>
                </Center>
            </HStack>
         </Box>
    </Pressable>
)
// hidden 
const randerhiddenItem=()=>(
    <Pressable w={50} roundedTopRight={10} roundedBottomRight={10} h='88%' ml='auto' justifyContent='center' bg={Colors.red}>
        <Center alignItems='center' space={2}>
            <FontAwesome name="trash" size={24} color={Colors.white}>
            </FontAwesome>
         </Center>
    </Pressable>
)

export default class CartItem extends Component {
  render() {
    return (
      <Box mr={6}>
        <Swiper/>

      </Box>
    )
  }
}