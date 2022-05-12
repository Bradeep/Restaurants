import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import ResultsShowScreen from '../screens/ResultsShowScreen';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <Stack.Navigator>
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
            <Stack.Screen name="ResultsShow"
                component={ResultsShowScreen}
                options={{
                    title: "Restaurant Details",
                }}
            />
        </Stack.Navigator>
    )
}

export default MainNavigation