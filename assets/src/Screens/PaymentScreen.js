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

import React from "react";
import Colors from "../Color";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const paymentMethodes = [
  {
    image: require("../../img/paypal.png"),
    alt: "paypal",
    icon: "Feather"
  },
  {
    image: "paypal.png",
    alt: "paypal",
    icon: "Feather"
  },
  {
    image: "paypal.png",
    alt: "paypal",
    icon: "Feather"
  },
]


function PaymentScreen() {
  const navigation = useNavigation()
  return (
    <Box flex={1} safeArea bg={Colors.main} py={5}>
      {/* header */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          PaymentScreen
        </Text>
      </Center>

      {/* selsections */}
      <Box h="full" bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {
              paymentMethodes.map((i, index)=>(
                <HStack
                key={index}
                alignItems="center"
                bg={Colors.white}
                px={3}
                py={1}
                rounded={10}
                justifyContent="space-between"
              >
                <Box>
                  <Image
                    source={i.image}
                    alt={i.alt}
                    w={60}
                    h={50}
                    resizeMode="contain"
                  />
                </Box>
                <Feather name="check-circle" size={24} color={Colors.deepgreen} />
              </HStack>
              ))
            }

            <Button bg={Colors.main} color={Colors.white} mt={5} onPress={()=> navigation.navigate("Placeorder")}>
              Continue
            </Button>
            <Text italic textAlign='center'>
              Payment methode id <Text bold italic>Paypal</Text> BY default
            </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default PaymentScreen;
