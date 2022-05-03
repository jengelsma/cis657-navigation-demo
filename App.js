import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import ProfileEditScreen from "./screens/ProfileEditScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {

  const Stack = createStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ProfileEdit" component={ProfileEditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
