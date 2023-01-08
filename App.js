import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PhoneNumber from './screens/PhoneNumber';

const App = () => {
//  const Stack = createNativeStackNavigator<StackParamList>();
// const Stack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

 return (
   <NavigationContainer>
     <Stack.Navigator
       initialRouteName="PhoneNumber"
       screenOptions={{
         headerShown: false,
       }}
     >
       <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
     </Stack.Navigator>
   </NavigationContainer>
 );


  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
};

export default App;