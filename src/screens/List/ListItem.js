import React from 'react';

import {Image} from 'react-native';
import {List} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

/**
 * Компонент отрисовки Итема для списка. Не вынес в папку компонентов потому что это не общий компонент
 * @param item
 * @returns {JSX.Element}
 * @constructor
 */
const ListItem = ({item}) => {
  const navigation = useNavigation();

  return (
    <List.Item
      title={'Author: ' + item?.actor.display_login}
      description={'Make: ' + item?.type}
      left={() => (
        <Image
          source={{uri: item.actor.avatar_url}}
          style={{height: 44, width: 44, borderRadius: 22}}
        />
      )}
      onPress={() => navigation.navigate('ItemScreen', {item})}
    />
  );
};

export default ListItem;
