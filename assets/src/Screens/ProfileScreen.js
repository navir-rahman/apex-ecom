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
} from "native-base";
import Colors from "../Color";
import Tabs from "../components/Profile/Tabs";

function ProfileScreen() {
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
        <Center pt={10} pb={6}>
          <Image
            source={require("../../img/admin.png")}
            alt="admin"
            w={24}
            h={24}
            resizeMode="cover"
          ></Image>
          <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
            admin
          </Heading>
          <Text italic fontSize={10} color={Colors.white}>
            joined dec 23 3455{" "}
          </Text>
        </Center>
        {/* tabs */}

        <Tabs></Tabs>
      </Box>
    </Box>
  );
}

export default ProfileScreen;
