import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Tabs from './tabs';


const Stack = createStackNavigator();

export default function AppStack() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Tabs" component={Tabs} />
        </Stack.Navigator>
    );
}
