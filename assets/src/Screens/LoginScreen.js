import { Box, Image, View ,Heading, Input, VStack, Button, Pressable, Text } from 'native-base'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../Color';

function LoginScreen({navigation}) {
  return (

        <Box flex={1} bg={Colors.black}>
            <Image
            flex={1}
            alt="logo"
            resizeMode="cover"
            size="lg"
            w="full"
            source={require("../../img/loginbg.png")}
            />
            <Box w="full" h="full" position="absolute" top="0" px="6"
            justifyContent="center">
                <Heading>Login</Heading>
                <VStack space={5} pt ="6">
                    <Input 
                    InputLeftElement={
                        <Entypo name="mail" size={20} color="pink" />
                    }
                    variant="underlined" type='mail' placeholder="User@mail.com" w="70%" pl={2} color={Colors.main} borderBottomColor={Colors.underline} ></Input>
                
                
                {/* password */}
                <Input 
                    InputLeftElement={
                        <AntDesign name="eye" size={24} color="pink" />
                    }
                    variant="underlined" type='password' placeholder="*****" w="70%" pl={2} color={Colors.main} borderBottomColor={Colors.underline} ></Input>
                
                

                </VStack>

                <Button
                _pressed={{
                    bg: Colors.pink,
                }}
                my={30} w="40%" rounded={50} bg={Colors.main}
                onPress={()=> navigation.navigate("Bottom")}
                >
                    Login
                </Button>
                <Pressable mt={4} onPress={()=> navigation.navigate("Register")} >
                    <Text color={Colors.deepestgray}>
                        SIGN UP
                    </Text>
                </Pressable>
            </Box>

    
        </Box>

  )
}

export default LoginScreen