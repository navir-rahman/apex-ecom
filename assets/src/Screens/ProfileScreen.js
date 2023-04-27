import React from 'react'
import { Box, Image, View ,Heading, Input, VStack, Button, Pressable, Text, Center } from 'native-base'
import Colors from '../Color'
import Tabs from '../components/Profile/Tabs'


function ProfileScreen() {
  return (
    <>
    <Center bg={Colors.main} pt={10} pb={6}>
      <Image
      source={{uri: ""}}
      alt='profile'
      w={24}
      h={24}
      resizeMode='cover'

      >

      </Image>
      <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}
      >
        admin  
      </Heading>
      <Text italic fontSize={10} color={Colors.white}>joined dec 23 3455 </Text>
    </Center>
    {/* tabs */}

    <Tabs></Tabs>
    </>
  )
}

export default ProfileScreen