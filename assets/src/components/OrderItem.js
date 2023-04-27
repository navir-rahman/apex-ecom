
import React from 'react'
import { Box, Center, FlatList, HStack, Pressable, Image, VStack, Text, Button } from 'native-base'
import Colors from '../Color'
import products from '../data/Product'

const OrderItem = () => {
  return (
    <FlatList showsVerticalScrollIndicator={false} data={products.slice(0,3)} keyExtractor={(item)=> item._id}
    renderItem={({item})=>(

        <Pressable>
            <Box mb={3}>
                <HStack alignItems='center' bg={Colors.white}   shadow={1} rounded={10} overflow='hidden'>
                    <Center w='25%' bg={Colors.deepgray}>
                        <Image source={{uri:item.img}} alt={item.name} w='full' h={24} resizeMode='contain' /> 
                    </Center>
                    <VStack w='60%' px={2}>
                        <Text isTruncated color={Colors.black} bold fontSize={12}>
                            ${item.name}
                        </Text>
                        <Text  color={Colors.lightblack}  mt={2}>
                            ${item.price}
                        </Text>
                    </VStack>

                    <Center>
                        <Button bg={Colors.main} _pressed={{
                            bg: Colors.main,
                        }}
                        _text={{
                            color: Colors.white,
                        }} >
                            5
                        </Button>
                    </Center>
                </HStack>
            </Box>
        </Pressable>

    )}>
        
    </FlatList>
  )
}

export default OrderItem