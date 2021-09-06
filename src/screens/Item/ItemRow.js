import React from 'react';

import {Linking, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {useTheme} from 'react-native-paper';

/**
 * Компонент отрисовки пункта на экране Итема
 * Добавлен функционал перехода по приходящему URL (Идея с открытием почты при нажатии на емэйл)
 * @param title
 * @param desc
 * @param descLinkable
 * @returns {JSX.Element}
 * @constructor
 */
const ItemRow = ({title, desc, descLinkable}) => {
  const {colors} = useTheme();

  // добавляем onPress только в случае если надо кликабельный desc
  const textAddLink = descLinkable
    ? {onPress: () => Linking.openURL(desc)}
    : {};
  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle, {color: colors.primary}]}>
        {title + ': '}
      </Text>
      <Text style={[styles.sectionDescription]} {...textAddLink}>
        {desc || 'No ' + title + ' data'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flexDirection: 'row',
    paddingTop: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionDescription: {
    fontSize: 16,
    fontWeight: '400',
    width: 300,
  },
});

export default ItemRow;
