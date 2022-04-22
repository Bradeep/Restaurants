import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "react-native-splash-screen"


import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screens</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {

  React.useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <NavigationContainer >
      {/* <StatusBar backgroundColor={"white"} barStyle="dark-content" /> */}
      <Stack.Navigator initialRouteName="Login"  >
        <Stack.Screen name="Home"
          component={HomeScreen}
          options={{
            title: "Restaurants",
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 22
            },
            headerBackVisible: false
          }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="ResultsShow"
          component={ResultsShowScreen}
          options={{
            title: "Restaurant Details",
          }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;