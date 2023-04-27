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
import Colors from "../../Color";

export default function Order() {
  return (
    <Box h="full" bg={Colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* paid order */}
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            bg={Colors.deepgray}
            py={5}
            px={2}
          >
            <Text fontSize={14} color={Colors.blue} isTruncated>3KSDFK4JJRJ </Text>
            <Text fontSize={14} color={Colors.blue} isTruncated>PAID</Text>
            <Text fontSize={14} color={Colors.blue} isTruncated>DEC 1234 12</Text>

            <Button
                px={7} py={1.5} rounded={50} bg={Colors.deepgreen} _text={{
                    Colors:Colors.main

                }}
                _pressed={{
                    bg: Colors.deepgreen
                }}
            >
                $3435
            </Button>
          </HStack>
        </Pressable>
        {/* not paid  */}
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            bg={Colors.deepgray}
            py={5}
            px={2}
          >
            <Text fontSize={14} color={Colors.blue} isTruncated>3KSDFK4JJRJ </Text>
            <Text fontSize={14} color={Colors.blue} isTruncated>PAID</Text>
            <Text fontSize={14} color={Colors.blue} isTruncated>DEC 1234 12</Text>

            <Button 
                px={7} py={1.5} rounded={50} bg={Colors.red} _text={{
                    Colors:Colors.main

                }}
                _pressed={{
                    bg: Colors.main
                }}
            >
                $3435
            </Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  );
}
