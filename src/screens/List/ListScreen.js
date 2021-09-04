import React, {useEffect} from 'react';

import {FlatList, View} from 'react-native';
import connect from 'react-redux/lib/connect/connect';
import {useSelector} from 'react-redux';
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
  let lastUpdate = Date.now();

  /**
   * При маунте компонента грузим список и создаем интервал который с LIST_AUTO_UPDATE_RATE обновляет список
   */
  useEffect(() => {
    props.loadList();

    const updater = setInterval(() => {
      if (props.navigation.isFocused()) {
        props.loadList();
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
      props.loadList();
      lastUpdate = Date.now();
    }
  };

  return (
    <View style={{flex: 1, paddingVertical: 8}}>
      <FlatList
        keyExtractor={item => item.id}
        style={{flex: 1}}
        data={props.list.list}
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

const mapState = state => ({
  list: state.list,
});
const mapDispatch = dispatch => ({
  loadList: () => dispatch.list.loadList(),
});

export default connect(mapState, mapDispatch)(ListScreen);
