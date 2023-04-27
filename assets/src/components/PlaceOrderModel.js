import React, { useState } from "react";
import { Center, HStack, Modal, VStack, Text, Button } from "native-base";
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
const PlaceOrderModel = () => {
  const navigation = useNavigation();
  const [showModel, setShowMOdel] = useState(false);
  return (
    <Center>
      <Mbutton
        onPress={() => setShowMOdel(true)}
        bg={Colors.black}
        color={Colors.white}
        mt={5}
      >
        Show Total
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
            <Button flex={1} bg={Colors.main} h={45} _text={{
                color: Colors.white,
            }}
            onPress={()=>{
              setShowMOdel(false);
              navigation.navigate('order');
            }
            }
            _pressed={{
                bg: Colors.main,
            }}
            >
               Pay Later
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default PlaceOrderModel;
