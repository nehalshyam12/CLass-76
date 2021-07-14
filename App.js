import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import IssLocationScreen from './screens/IssLocation';
import MeteorScreen from './screens/Meteors';

const stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home"screenOptions = {{
        headerShown:false
      }}>
      <Stack.Screen name = "Home" component = {HomeScreen}/>
      <Stack.Screen name = "IssLoaction" component = {IssLoactionScreen}/>
      <Stack.Screen name = "Meteors" component = {MeteorScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App ;