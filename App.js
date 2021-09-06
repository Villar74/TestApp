/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import {Provider} from 'react-redux';
import {store} from './src/store';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ScreensStack from './src/screens';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  return (
    <Provider store={store}>
      <PaperProvider>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <ScreensStack />
        </SafeAreaView>
      </PaperProvider>
    </Provider>
  );
};

export default App;
