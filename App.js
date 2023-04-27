import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  StatusBar,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";
import HomeScreen from "./assets/src/Screens/HomeScreen";
import SingleProductScreen from "./assets/src/Screens/SingleProductScreen";
import CartScreens from "./assets/src/Screens/CartScreens";
import ProfileScreen from "./assets/src/Screens/ProfileScreen";
import ShippingScreen from "./assets/src/Screens/ShippingScreen";
import PaymentScreen from "./assets/src/Screens/PaymentScreen";
import PlaceOrderScreen from "./assets/src/Screens/PlaceOrderScreen";
import OrderScreen from "./assets/src/Screens/OrderScreen";
import Registartionscreen from "./assets/src/Screens/Registartionscreen";
import LoginScreen from "./assets/src/Screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNav from "./assets/src/navigations/BottomNav";


const Stack = createNativeStackNavigator();
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      {/* <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">

          <Heading size="lg">Welcome to NativeBase</Heading>
          

          <ToggleDarkMode />
        </VStack>
      </Center> */}

      <NavigationContainer>
        <StatusBar hidden={true}/>
        <Stack.Navigator 
          initialRouteName='Login'
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={Registartionscreen} />
          <Stack.Screen name="Order" component={OrderScreen} />
          <Stack.Screen name="Bottom" component={BottomNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}




// import { StatusBar } from "expo-status-bar";
// import HomeScreen from "./assets/src/Screens/HomeScreen";
// import { NativeBaseProvider } from "native-base";

// export default function App(){
  
//   return (
//     <NativeBaseProvider>
//     <HomeScreen/>
//   </NativeBaseProvider>
//     );
// }




















