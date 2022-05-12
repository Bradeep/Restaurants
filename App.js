import * as React from 'react';
// import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SplashScreen from "react-native-splash-screen"
import { checkInternetConnection } from 'react-native-offline'
import FlashMessage, { showMessage } from 'react-native-flash-message'


import LoginScreen from './src/screens/LoginScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import TabNavigation from './src/navigation/TabNavigation';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screens</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {

  // React.useEffect(() => {
  //   SplashScreen.hide();
  // });

  const [isConnected, setConnection] = React.useState(true)
  const flash = React.useRef();

  React.useEffect(() => {
    const syncInterval = setInterval(() => {
      checkInternetConnection()
        .then((isConnected) => {
          setConnection(isConnected)
        })
        .catch((e) => console.log(`error getting status : ${e}`))
    }, 1000)
    return () => clearInterval(syncInterval)
  })

  React.useEffect(() => {
    if (!isConnected) {
      console.log('Connected')
      showMessage({
        description:
          'App is currently offline',
        message: 'App is offline',
        type: 'info',
        icon: 'warning',
        duration: 2500,
        style: {
          paddingVertical: 15,
          backgroundColor: 'red',
        },
        titleStyle: {
          fontSize: 18,
        },
        textStyle: {
          fontSize: 14,
        },
      })
    }
  }, [isConnected])

  return (
    <NavigationContainer >
      {/* <StatusBar backgroundColor={"white"} barStyle="dark-content" /> */}
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Tab" component={TabNavigation} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      </Stack.Navigator>
      <FlashMessage ref={flash} position={'top'} />
    </NavigationContainer>
  );
}

export default App;