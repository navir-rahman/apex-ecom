import {
  Text,
  Image,
  ScrollView,
  Flex,
  Pressable,
  Box,
  Heading,
  VStack,
  FormControl,
  Select,
  CheckIcon,
  TextArea,
} from "native-base";
import React, { useState } from "react";
import Colors from "../Color";
import Rating from "./Rating";
import Messages from "./notifacations/Messages";
import Mbutton from "./Mbutton";

const Review = () => {
  const [ratings, setreating] = useState("");
  return (
    <Box>
      <Heading bold fontSize={15} mb={2}>
        Review
      </Heading>

      {/* if no review */}
      <Messages
        color={Colors.white}
        bg={Colors.deepestgray}
        size={12}
        children={"NO Review"}
        bold
      />

      {/* review  */}
      <Box p={3} bg={Colors.lightpink} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black} bold>
          User Doe
        </Heading>

        <Rating value={4}></Rating>
        <Text mb={2}>june 12 2023</Text>
        <Messages
          color={Colors.black}
          bg={Colors.white}
          size={12}
          children={"lorem4"}
        />
      </Box>

      {/* write review  */}
      {/* <Box mt={6}>
        <Heading fontSize={15} color={Colors.black} bold={true}>
          Write Review
        </Heading>

        <VStack space={6}>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Ratting
            </FormControl.Label>
            <Select
              bg={Colors.lightpink}
              borderWidth={0}
              rounded={5}
              py={4}
              placeholder="Choose Item"
              _selectedItem={{
                bg: Colors.lightpink,
                endIcon: <CheckIcon size={3}></CheckIcon>,
                justifyContent: "center",
                alignItems: "center",
              }}
              selectedValue={ratings}
              onValueChange={(e) => setreating(e)}
            >
              <Select.Item label="1 - poor" value="1" />
              <Select.Item label="2 - poor" value="2" />
              <Select.Item label="3 - poor" value="3" />
              <Select.Item label="4 - poor" value="4" />
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Comment
            </FormControl.Label>

            <TextArea
              h={30}
              w="full"
              placeholder="This is good"
              borderWidth={0}
              bg={Colors.lightpink}
              py={4}
              _focus={{
                bg: Colors.lightpink,
              }}
            ></TextArea>
          </FormControl>
          <Mbutton bg={Colors.main} color={Colors.white}>
            Submit
          </Mbutton>

          {/* if not login */}
          {/* <Messages
          color={Colors.white}
          bg={Colors.black}
          size={12}
          children={"Please login to review"}
        /> 
        </VStack>
      </Box> */}
    </Box>
  );
};

export default Review;
