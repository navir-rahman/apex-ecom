import React from 'react'
import { Box, Image,Center, View ,Heading, Input, VStack, Button, Pressable, Text } from 'native-base'
import Colors from '../color'
import Mbutton from '../components/Mbutton'


function NOtVerifyScreen() {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
      <Center w="full" h={250}>
<Image source={require("../../OIP.png")}
rounded={50}
alt='m' size="lg" >

</Image>
      </Center>
      <VStack space={6} px={5} alignItems='center' >
        <Mbutton bg={Colors.black}
        color={Colors.white}
        >Register</Mbutton>
       
       
        <Mbutton bg={Colors.white}
        color={Colors.black}
        >Login</Mbutton>
      </VStack>
    </Box>
  )
}

export default NOtVerifyScreen