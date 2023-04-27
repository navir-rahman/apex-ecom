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
} from "native-base";
import React, { Component } from "react";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../Color";
import Mbutton from "./Mbutton";

export default class Cartemptu extends Component {
  render() {
    return (
      <Box flex={1} px={4}>
        <Center h="90%">
          <Center w={200} h={200} bg={Colors.white} rounded="full">
            <FontAwesome name="shopping-basket" size={64} color={Colors.main} />
          </Center>
          <Text color={Colors.main} bold mt={5}>
            Cart is Empty
          </Text>
        </Center>
        <Mbutton bg={Colors.black} color={Colors.white}>
        Start shopping
        </Mbutton>
      </Box>
    );
  }
}
