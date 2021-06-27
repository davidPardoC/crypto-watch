import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import {CandleStickChartComponent} from './components/CandleChart';
import {LineChartComponent} from './components/LineChart';
export const StatisticsScreen = ({route, navigation}) => {
  const [isCandlestick, setIsCandlestick] = useState(true);
  const {currency} = route.params;
  useEffect(() => {
    navigation.setOptions({title: currency.name});
  }, []);
  const setCandlestick = () => {
    setIsCandlestick(true);
  };
  const setLineChart = () => {
    setIsCandlestick(false);
  };
  return (
    <View style={{flex: 1, backgroundColor: '#14121E'}}>
      <CandleStickButton onPress={setLineChart} />
      <LinechartButton onPress={setCandlestick} />
      <View style={{width: '100%', height: '40%'}}>
        {isCandlestick ? <CandleStickChartComponent /> : <LineChartComponent />}
      </View>
    </View>
  );
};

const CandleStickButton = ({onPress}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgba(255,255,255,0.2)',
      width: 30,
      height: 30,
      borderRadius: 100,
    },
  });
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}>
      <View style={styles.container}></View>
    </TouchableOpacity>
  );
};
const LinechartButton = ({onPress}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgba(255,255,255,0.2)',
      width: 30,
      height: 30,
      borderRadius: 100,
    },
  });
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}>
      <View style={styles.container}></View>
    </TouchableOpacity>
  );
};
