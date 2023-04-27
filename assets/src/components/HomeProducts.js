import React from "react";
import {
  Text,
  Image,
  ScrollView,
  Flex,
  Pressable,
  Box,
  Heading,
} from "native-base";
import products from "../data/Product";
import Colors from "../Color";
import Rating from "./Rating";
import { useNavigation } from "@react-navigation/native";
function HomeProducts() {
  const navigation = useNavigation();
  return (
    <ScrollView flex={1}>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}
      >
        {products.map((pro) => (
          <Pressable
          onPress={()=> navigation.navigate("Single", pro)}
            key={pro._id}
            w="47%"
            bg={Colors.white}
            rounded="md"
            shadow={2}
            pt={0}
            my={3}
            pb={2}
            overflow="hidden"
          >
            <Image
              source={{ uri: pro.img }}
              alt={pro.name}
              w="full"
              h={24}
              resizeMOde="contain"
            ></Image>
            <Box px={4} pt={1}>
              <Heading size="sm" bold>
                {pro.price}
              </Heading>
              <Text fontSize={10} mt={1} isTruncated w="full">
                {pro.name}
              </Text>
              {/* ratting
               */}
              <Rating value={pro.rating}></Rating>
            </Box>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
}

export default HomeProducts;
