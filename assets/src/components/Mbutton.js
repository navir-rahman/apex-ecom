import React from 'react'
import { Box, Image, View ,Heading, Input, VStack, Button, Pressable, Text } from 'native-base'

function Mbutton({mt,bg,color,children,onPress}) {
  return (
    <Button w='full' h={55} mt={mt} rounded='full' bg={bg} _text={{
        color:color, fontweight:'bold'
    }} 
    _pressed={{bg:bg}}
    onPress={onPress}
    >
        {children}
    </Button>
  )
}

export default Mbutton