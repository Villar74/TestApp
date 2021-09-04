import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListScreen from './List/ListScreen';
import ItemScreen from './Item/ItemScreen';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

/**
 * Основной навигатор с путями
 * @returns {JSX.Element}
 * @constructor
 */
function ScreensStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListScreen">
        <Stack.Screen
          name="ListScreen"
          component={ListScreen}
          options={{title: 'Events'}}
        />
        <Stack.Screen
          name="ItemScreen"
          component={ItemScreen}
          options={({route}) => ({title: 'Event ID: ' + route.params.item.id})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ScreensStack;
