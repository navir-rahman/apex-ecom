import React, { useState } from "react";
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
  ScrollView,
  HStack,
  Spacer,
} from "native-base";
import Colors from "../Color";
import Rating from "../components/Rating";
import NumericInput from "react-native-numeric-input";
import Mbutton from "../components/Mbutton";
import Review from "../components/Review";
import { useNavigation } from "@react-navigation/native";

function SingleProductScreen({ route }) {
  const [value, setvaue] = useState(0);
  const navigation = useNavigation();
  const product = route.params;
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: product.img }}
          alt="image"
          w="full"
          h={300}
          resizeMode="contain"
        ></Image>

        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          {" "}
          new
        </Heading>
        <Rating
          value={product.rating}
          text={`${product.numRevides} reviews`}
        ></Rating>
        <HStack space={2} alignItems="center" mt={5}>
          {product.countInStock > 0 ? (
            <>
              <NumericInput
                valuw={value}
                totalWidth={140}
                totalHeight={30}
                iconSize={25}
                step={1}
                maxValue={product.countInStock}
                minValue={0}
                borderColor={Colors.deepestgray}
                rounded
                textColor={Colors.black}
                iconStyle={{ color: Colors.white }}
                rightButtonBackgroundColor={Colors.main}
                leftButtonBackgroundColor={Colors.main}
              ></NumericInput>
            </>
          ) : (

            <Heading bold color={Colors.red} fontSize={19}>
            Out of stock
          </Heading>
          )}

          <Spacer></Spacer>
          <Heading bold color={Colors.black} fontSize={19}>
            ${product.price}
          </Heading>
        </HStack>

        <Text lineHeight={24} fontSize={14} mt={5}>
              {product.dis}
        </Text>

        <Mbutton bg={Colors.main} color={Colors.white} mt={10} onPress={()=> navigation.navigate("Cart")} >

          ADD TO CART
        </Mbutton>

        {/* review
         */}
        <Review></Review>
      </ScrollView>
    </Box>
  );
}

export default SingleProductScreen;
