import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnlineShopping from "../screens/OnlineShopping";
import Dressing from "../screens/Dressing";
import ShoppingCart from "../screens/ShoppingCart";

const Router = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={OnlineShopping} />
        <Stack.Screen name="dressing" component={Dressing} />
        <Stack.Screen name="cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
