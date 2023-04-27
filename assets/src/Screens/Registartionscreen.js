import { Box, Image, View ,Heading, Input, VStack, Button, Pressable, Text } from 'native-base'
import React from 'react'
import { EvilIcons, Entypo, AntDesign } from '@expo/vector-icons';

import Colors from '../Color';

function Registartionscreen({navigation}) {
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
                <Heading>Sign Up</Heading>
                <VStack space={5} pt ="6">
                                    {/* user */}
                <Input 
                    InputLeftElement={
                        <EvilIcons name="user" size={24} color="pink" />
                    }
                    variant="underlined" placeholder="your name" w="70%" pl={2} color={Colors.main} borderBottomColor={Colors.underline} >
            
                    </Input>
{/* email */}
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
                    variant="underlined" type='password' placeholder="*****" w="70%" pl={2} color={Colors.main} borderBottomColor={Colors.underline} >
            
                    </Input>
                
                

                </VStack>

                <Button
                _pressed={{
                    bg: Colors.pink,
                }}
                my={30} w="40%" rounded={50} bg={Colors.main}
                onPress={()=> navigation.navigate("Bottom")}
                
                >
                    Sign Up
                </Button>
                <Pressable mt={4} 
                onPress={()=> navigation.navigate("Login")}
                >
                    <Text color={Colors.deepestgray}>
                       Login
                    </Text>
                </Pressable>
            </Box>

    
        </Box>

  )
}

export default Registartionscreen