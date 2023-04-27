import React from "react";
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
import Colors from "../Color";
import OrderInfo from "../components/OrderInfo";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import OrderItem from "../components/OrderItem";
import OrderModel from "../components/OrderModel";

function OrderScreen() {
  return (
    <Box bg={Colors.subgreen} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo
            title="Cstomer"
            success
            subtitle="Admin doe"
            text="email@mail.com"
            icons={<EvilIcons name="user" size={30} color={Colors.white} />}
          />
          <OrderInfo
            title="Shipping"
            danger
            subtitle="Shipping: ba road"
            text="Payment methode"
            icons={
              <FontAwesome5
                name="shipping-fast"
                size={30}
                color={Colors.white}
              />
            }
          />
          <OrderInfo
            title="Deliver to"
            subtitle="dhaka, bd"
            text="Fast delivery"
            icons={<Feather name="box" size={30} color={Colors.white} />}
          />
        </ScrollView>
      </Box>
      {/* order item  */}
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>
          Products
        </Heading>
        <OrderItem />

        {/* place order model  */}
        <OrderModel />
      </Box>
    </Box>
  );
}

export default OrderScreen;
