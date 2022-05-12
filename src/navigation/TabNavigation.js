import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'

import MainNavigation from "./MainNavigation";
import Settings from "../screens/Settings";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({

                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Main') {
                        iconName = focused
                            ? 'cafe'
                            : 'cafe-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }
                    // You can return any component that you like here!
                    return <Icon name={iconName} size={25} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                // tabBarShowLabel: false,
                headerShown: false,
                tabBarLabelStyle: {
                    fontSize: 14,
                    fontFamily: 'Gill Sans'
                },
                tabBarHideOnKeyboard: 'true'
            })}
        >
            <Tab.Screen name='Main'
                component={MainNavigation}
                options={{
                    tabBarLabel: 'Foods',
                }}
            />
            <Tab.Screen
                name='Settings'
                component={Settings}
            />
        </Tab.Navigator>
    )

}

export default TabNavigation