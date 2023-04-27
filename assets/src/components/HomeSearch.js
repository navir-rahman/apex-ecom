import React from "react";

import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  Input,
  Pressable,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import Colors from "../Color";
import { useNavigation } from "@react-navigation/native";
function HomeSearch() {
  const navigation = useNavigation();
  return (
    <HStack
      space={3}
      w="full"
      px={6}
      bg={Colors.darkpink}
      py={4}
      alignItems="center"
      safeAreaTop
    >
      <Input
        placeholder="nike, puma ...."
        w="85%"
        bg={Colors.white}
        type="search"
        h={12}
        borderWidth={0}
        variant="filled"
        _focus={{
          bg: Colors.white,
        }}
      ></Input>
      <Pressable ml={3}  onPress={()=> navigation.navigate("Cart")}>
        <Feather name="shopping-bag" size={24} color="white" />
        <Box
          px={1}
          rounded="full"
          position="absolute"
          top={-13}
          left={2}
          bg={Colors.blue}
          _text={{
            color: Colors.white,
            fontSize: "11px",
          }}
        >
          5
        </Box>
      </Pressable>
    </HStack>
  );
}

export default HomeSearch;
