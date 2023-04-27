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
} from "native-base";

import React from "react";
import Colors from "../Color";
import { useNavigation } from "@react-navigation/native";

const Shippinginput = [
  {
    label: "Ënter City",
    type: "text",
  },
  {
    label: "Ënter Country",
    type: "text",
  },
  {
    label: "Ënter Postal Colde",
    type: "text",
  },
  {
    label: "Ënter Address",
    type: "text",
  },
];

function ShippingScreen() {
  const navigation= useNavigation()
  return (
    <Box flex={1} safeArea bg={Colors.main} py={5}>
      {/* header */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          Delivery Address
        </Text>
      </Center>

      {/* INputs */}
      <Box h="full" bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {Shippinginput.map((i, index) => (
              <FormControl key={index}>
                <FormControl.Label
                  _text={{
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  Enter City
                </FormControl.Label>
                <Input
                  borderWidth={0.2}
                  borderColor={Colors.main}
                  bg={Colors.subgreen}
                  py={4}
                  type={i.type}

                  color={Colors.main}
                  _focus={{
                    bg: Colors.subgreen,
                    borderwidth: 1,
                    borderColor: Colors.main,
                  }}
                ></Input>
              </FormControl>
            ))}
            <Button bg={Colors.main} color={Colors.white} mt={5} onPress={()=> navigation.navigate("Checkout")} >
              Continue
            </Button>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default ShippingScreen;
