import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import {CandleStickChartComponent} from './components/CandleChart';
import {LineChartComponent} from './components/LineChart';
import CandlestickIcon from '../../assets/icons/candlestick.svg';
import Line from '../../assets/icons/line.svg';
import {TimePeriods} from './components/TimePeriod/TimePeriods';
import {OperationButtons} from './components/OperationButtons/OperationButtons';

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
    <View
      style={{
        flex: 1,
        backgroundColor: '#14121E',
        paddingTop: 5,
        paddingLeft: 7,
        paddingRight: 7,
      }}>
      <Text
        style={{
          textAlign: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: 20,
        }}>
        $48000.00
      </Text>
      <View
        style={{
          flex: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 5,
          marginBottom: 5,
        }}>
        <View style={{width: '50%'}}>
          <TimePeriods />
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <CandleStickButton onPress={setLineChart} />
          <LinechartButton onPress={setCandlestick} />
        </View>
      </View>

      <View style={{width: '100%', height: '70%'}}>
        {!isCandlestick ? (
          <CandleStickChartComponent />
        ) : (
          <LineChartComponent />
        )}
      </View>
      <OperationButtons />
    </View>
  );
};

const CandleStickButton = ({onPress}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgba(255,255,255,0.2)',
      width: 40,
      height: 40,
      borderRadius: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 7,
    },
  });
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}>
      <View style={styles.container}>
        <CandlestickIcon width={30} height={30} />
      </View>
    </TouchableOpacity>
  );
};
const LinechartButton = ({onPress}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgba(255,255,255,0.2)',
      width: 40,
      height: 40,
      borderRadius: 100,
      marginLeft: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}>
      <View style={styles.container}>
        <Line width={25} height={25} />
      </View>
    </TouchableOpacity>
  );
};
