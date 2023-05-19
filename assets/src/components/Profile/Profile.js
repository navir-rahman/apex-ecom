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
  FormControl,
} from "native-base";

import React from "react";
import Colors from "../../Color";
import Mbutton from "../Mbutton";

const inputs = [
  {
    label: "username",
    type: "text",
  },
  {
    label: "email",
    type: "mail",
  },
  {
    label: "Password",
    type: "password",
  },
  {
    label: "New Password",
    type: "password",
  },
];

export default function Profile() {
  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          {inputs.map((i, index) => (
            <FormControl key={index}>
              <FormControl.Label
                _text={{
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {i.label}
              </FormControl.Label>
              <Input
                type={i.type}
                borderColor={Colors.white}
                borderWidth={1}
                bg={Colors.subgreen}
                py={3}
                color={Colors.black}
                fontSize={20}
                _focus={{
                  bg: Colors.subgreen,
                }}
              ></Input>
            </FormControl>
          ))}
          <Box flex={1} bg={Colors.black}  h={55} rounded='full'>
            <Image
              flex={1}
              alt="logo"
              resizeMode="cover"
              size="lg"
              w="full"
              source={require("../../../img/btnBg.png")}
            />
            <Box
              w="full"
              h="full"
              position="absolute"
              top="0"
              px="6"
              justifyContent="center"
            >
              <Mbutton color={Colors.white} bg={Colors.transparent}>
                Update Profile
              </Mbutton>
            </Box>
          </Box>
        </VStack>
      </ScrollView>
    </Box>
  );
}
