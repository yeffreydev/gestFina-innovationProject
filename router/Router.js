import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import NewTransaction from "../screens/NewTransaction";
import EditTrasaction from "../screens/EditTransaction";
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen
          name="NewTransaction"
          component={NewTransaction}
          options={{ headerStyle: { backgroundColor: "#2E3432" }, headerTintColor: "#fff", headerTitleStyle: { fontWeight: "bold" }, headerTitle: "Agregar" }}
        />
        <Stack.Screen
          name="EditTransaction"
          component={EditTrasaction}
          options={{ headerStyle: { backgroundColor: "#2E3432" }, headerTintColor: "#fff", headerTitleStyle: { fontWeight: "bold" }, headerTitle: "Actualizar" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
