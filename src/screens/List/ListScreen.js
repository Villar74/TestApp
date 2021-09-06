import React, {useEffect} from 'react';

import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ListItem from './ListItem';
import {Text} from 'react-native-paper';

const LIST_AUTO_UPDATE_RATE = 60 * 1000;
const LIST_USER_UPDATE_RATE = 15 * 1000;

/**
 * Экран со списком ивентов (стили не вынес потому что их мало). Ошибка загрузки данных не обработана. Можно обработать
 * используя подключенный @rematch/loading который вернет ошибку
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const ListScreen = props => {
  const isListLoading = useSelector(rootState => rootState.loading.models.list);
  const list = useSelector(rootState => rootState.list.list);
  const dispatch = useDispatch();

  let lastUpdate = Date.now();

  /**
   * При маунте компонента грузим список и создаем интервал который с LIST_AUTO_UPDATE_RATE обновляет список
   */
  useEffect(() => {
    dispatch.list.loadList();

    const updater = setInterval(() => {
      if (props.navigation.isFocused()) {
        dispatch.list.loadList();
        lastUpdate = Date.now();
      }
    }, LIST_AUTO_UPDATE_RATE);

    return () => clearInterval(updater);
  }, []);

  /**
   * Обновляем руками список если с последнего обновления прошло LIST_USER_UPDATE_RATE мс
   */
  const handleRefresh = () => {
    if (Date.now() - lastUpdate > LIST_USER_UPDATE_RATE) {
      dispatch.list.loadList();
      lastUpdate = Date.now();
    }
  };

  return (
    <View style={{flex: 1, paddingVertical: 8}}>
      <FlatList
        keyExtractor={item => item.id}
        style={{flex: 1}}
        data={list}
        refreshing={isListLoading}
        onRefresh={handleRefresh}
        renderItem={({item}) => <ListItem item={item} />}
        ListEmptyComponent={
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>No Events</Text>
          </View>
        }
      />
    </View>
  );
};

export default ListScreen;
