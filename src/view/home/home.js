import React, {useEffect, useState} from 'react';
import {FlatList, View, ActivityIndicator, Text} from 'react-native';
import {CryptoService} from '../../services/crypto-service';
import {ListItem} from './components/ListItem';
import {ListTittle} from './components/ListTittle';

export const Home = ({navigation}) => {
  const [cryptoList, setCryptoList] = useState([]);
  const [lastPage, setLastpage] = useState(1);
  const [isRefreshing, setIsRefreshing] = useState(false);
  useEffect(() => {
    getCryptoList(lastPage);
    return () => {
      console.log('Unmounted');
      setCryptoList([]);
    };
  }, []);
  const getCryptoList = async page => {
    const list = await CryptoService.getCryptoList(page);
    const aux = cryptoList.concat(list);
    setCryptoList(aux);
    setIsRefreshing(false);
  };
  return (
    <View style={{backgroundColor: '#14121E', height:'100%'}}>
      <View style={{height: '100%'}}>
        <FlatList
          ListFooterComponent={() => <LoadingFooter />}
          keyExtractor={item => item.id.toString()}
          refreshing={isRefreshing}
          onEndReached={() => {
            if (cryptoList.length > 0) {
              setIsRefreshing(true);
              let currentPage = lastPage;
              currentPage++;
              setLastpage(currentPage);
              getCryptoList(currentPage);
            }
          }}
          data={cryptoList}
          onEndReachedThreshold={0.5}
          renderItem={({item}) => {
            return <ListItem currency={item} navigation={navigation} />;
          }}
        />
      </View>
    </View>
  );
};

const LoadingFooter = () => {
  return (
    <View style={{display: 'flex'}}>
      <ActivityIndicator animating size="large" color="#053742" />
    </View>
  );
};
