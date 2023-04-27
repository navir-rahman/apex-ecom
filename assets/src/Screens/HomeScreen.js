import React from 'react'
import { Box, Image, View ,Heading, Input, VStack, Button, Pressable, Text } from 'native-base'
import Colors from '../Color'
import HomeSearch from '../components/HomeSearch'
import HomeProducts from '../components/HomeProducts'


function HomeScreen() {
  return (
    <Box flex={1} bg={Colors.white}>
      <HomeSearch></HomeSearch>
      <HomeProducts></HomeProducts>


   </Box>
  )
}

export default HomeScreen