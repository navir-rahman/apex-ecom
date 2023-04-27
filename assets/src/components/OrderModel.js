import React, { useState } from "react";
import { Center, HStack, Modal, VStack, Text, Button, Pressable, Image } from "native-base";
import Mbutton from "./Mbutton";
import Colors from "../Color";
import { useNavigation } from "@react-navigation/native";

const OrdersInfos = [
  {
    title: "Products",
    price: 123.45,
    color: "black",
  },
  {
    title: "shipping",
    price: 123.45,
    color: "black",
  },
  {
    title: "Tax",
    price: 123.45,
    color: "black",
  },
  {
    title: "Total Amount",
    price: 123.45,
    color: "black",
  },
];
const OrderModel = () => {
  const navigation = useNavigation()
  const [showModel, setShowMOdel] = useState(false);
  return (
    <Center>
      <Mbutton
        onPress={() => setShowMOdel(true)}
        bg={Colors.main}
        color={Colors.white}
        mt={5}
      >
        Show Payment & Total
      </Mbutton>
      <Modal isOpen={showModel} onClose={() => setShowMOdel(false)} size="lg">
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {OrdersInfos.map((i, index) => (
                <HStack alignItems="center" justifyContent="space-between">
                  <Text fontWeight="medium">{i.title}</Text>
                  <Text color={i.color=== 'main' ? Colors.main : Colors.black} bold>
                    ${i.price}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Pressable w='full' justifyContent='center' bg={Colors.paypal} h={45} onPress={()=> setShowMOdel(false)} mb={2}
            >
                <Image source={require('../../img/paypal.png')} alt="paypal" resizeMode="contain" w='full' h={34} ></Image>
            </Pressable>
            <Button flex={1} bg={Colors.black} h={45} _text={{
                color: Colors.white,
            }}
            onPress={()=>{
              setShowMOdel(false);
              navigation.navigate('Bottom');
              
            }}
            _pressed={{
                bg: Colors.black,
            }}
            >
                Place an order
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default OrderModel;
