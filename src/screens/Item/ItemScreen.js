import React, {useCallback} from 'react';

import {Image, Linking, TouchableOpacity, View, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';
import ItemRow from './ItemRow';

/**
 * Экран просмотра Итема. Добавлен функционал нажатия на иконку и имя юзера чтобы перейти на более детальную информацию
 * (Из апи). В продакшен вынес бы в отдельный компонент headContainer, и сделал бы компоненты из ItemRow
 * @param route
 * @param navigation
 * @returns {JSX.Element}
 * @constructor
 */
const ItemScreen = ({route, navigation}) => {
  const {item} = route.params;

  const userUrl = item.actor.url;

  const handlePress = useCallback(async () => {
    await Linking.openURL(userUrl);
  }, [userUrl]);

  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <TouchableOpacity onPress={() => Linking.openURL(item.repo.url)}>
          <Title>{item?.actor.display_login}</Title>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePress}>
          <Image source={{uri: item.actor.avatar_url}} style={styles.image} />
        </TouchableOpacity>
      </View>
      <ItemRow title={'Repo: '} desc={item?.repo.name} />
      <ItemRow title={'Make: '} desc={item.type} />
      <ItemRow title={'Date: '} desc={item.created_at} />
      {
        // Не обрабатываю случай когда может быть несколько ивентов
        // В продакшен коде этот кусок я бы вынес в отдельные компоненты которые какой нибудь логикой
        // например с помощью switch выбирались как отрисоваться
        item.type === 'PushEvent' ? (
          <View>
            <ItemRow title={'Push ID: '} desc={item.payload.push_id} />
            <ItemRow
              title={'Author: '}
              desc={item.payload.commits[0]?.author?.name}
            />
            <ItemRow
              title={'Author Email: '}
              desc={item.payload.commits[0]?.author?.email}
              descLinkable
            />
            <ItemRow
              title={'Message: '}
              desc={item.payload.commits[0].message}
            />
          </View>
        ) : (
          <View />
        )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},
  image: {height: 64, width: 64},
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ItemScreen;
