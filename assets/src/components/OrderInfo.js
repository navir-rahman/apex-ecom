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
    FormControl,
    ScrollView,
    HStack,
  } from "native-base";
import React from 'react'
import Colors from "../Color";

const OrderInfo = ({icons, title, subtitle, text, success, danger}) => {
  return (
    <Center bg={Colors.white} w={200} py={2} rounded={10} shadow={4}mb={2} ml={5} mr={1} px={4}>
        <Center bg={Colors.main} w={60} h={60} rounded='full'>
            {icons}
        </Center>
        <Heading bold fontSize={12} isTruncated mt={3} mb={2} color={Colors.black}>
            {title}
        </Heading>
        <Text fontSize={13} color={Colors.black}>
            {subtitle}
        </Text>
        <Text fontSize={13} textAlign='center' italic color={Colors.black}>
            {text}
        </Text>
        {/* status  */}
        {
            success && (
                <Center py={2} mt={2} rounded={5} w='full' bg={Colors.black}>
                    <Text fontSize={12} color={Colors.white}>
                        Paid on jan 12 2021
                    </Text>
                    </Center>
            )
        }
                {
            danger && (
                <Center py={2} mt={2} rounded={5} w='full' bg={Colors.red}>
                    <Text fontSize={12} color={Colors.white}>
                        Not delivered
                    </Text>
                    </Center>
            )
        }
    </Center>
  )
}

export default OrderInfo