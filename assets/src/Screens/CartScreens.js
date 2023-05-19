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
  ScrollView,
  HStack,
} from "native-base";

import React from "react";
import Colors from "../Color";
import CartItem from "../components/CartItem";
import Mbutton from "../components/Mbutton";
import { useNavigation } from "@react-navigation/native";

function CartScreens() {
  const navigation = useNavigation();
  return (
    <Box flex={1} bg={Colors.white}>
      <Image
        flex={1}
        alt="logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../img/bg3.png")}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center"
      >
        <Box flex={1} safeAreaTop bg={Colors.transparent}>
          <Center w="full" py={5}>
            <Text color={Colors.black} fontSize={20} bold>
              cart
            </Text>
          </Center>
          {/* if cart emply */}
          {/* <Cartemptu /> */}
          {/* cart item */}

            {/* total */}
            <Center mt={5}>
              <HStack
                rounded={50}
                justifyContent="space-between"
                bg={Colors.transparent}
                shadow={2}
                w="90%"
                pl={5}
                h={45}
                alignItems="center"
              >
                <Text>Total</Text>
                <Button
                  px={10}
                  h={45}
                  rounded={50}
                  bg={Colors.main}
                  bold
                  _text={{
                    color: Colors.white,
                    fontWeight: "semibold",
                  }}
                  _pressed={{
                    bg: Colors.main,
                  }}
                >
                  $345
                </Button>
              </HStack>
            </Center>

            {/* checkout */}
            <Center px={5}>
              <Mbutton
                bg={Colors.black}
                color={Colors.white}
                mt={10}
                onPress={() => navigation.navigate("Shipping")}
              >
                Checkout
              </Mbutton>
            </Center>
          
          {/* <ScrollView >
          <CartItem ></CartItem>
          </ScrollView> */}

        </Box>
      </Box>
    </Box>
  );
}

export default CartScreens;
