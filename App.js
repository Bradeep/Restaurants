import * as React from 'react';
// import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SplashScreen from "react-native-splash-screen"
import { checkInternetConnection } from 'react-native-offline'
import FlashMessage, { showMessage } from 'react-native-flash-message'


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

  // React.useEffect(() => {
  //   SplashScreen.hide();
  // });

  const [isConnected, setConnection] = React.useState(true)
  const flash = React.useRef();

  React.useEffect(() => {
    const syncInterval = setInterval(() => {
      checkInternetConnection()
        .then((isConnected) => {
          //console.log('connection:', isConnected)
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
      <Stack.Navigator initialRouteName='Login'  >
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
      <FlashMessage ref={flash} position={'top'} />
    </NavigationContainer>
  );
}

export default App;