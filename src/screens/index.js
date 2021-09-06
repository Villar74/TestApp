import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListScreen from './List/ListScreen';
import ItemScreen from './Item/ItemScreen';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {useColorScheme} from 'react-native';

const Stack = createNativeStackNavigator();

/**
 * Основной навигатор с путями
 * @returns {JSX.Element}
 * @constructor
 */
function ScreensStack() {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
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
