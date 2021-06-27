import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  processColor,
  TouchableOpacity,
} from 'react-native';
import {LineChart} from 'react-native-charts-wrapper';
const COLOR_WHITE = processColor('#ffffff');
export const ListItem = ({currency, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Statistics', {currency});
      }}>
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image style={styles.logo} source={{uri: currency.image}} />
        </View>
        <Text style={styles.textName}>{currency.name}</Text>
        <View style={{flex: 0, height: 70, width: 180, marginLeft: 'auto'}}>
          <LineChart
            style={styles.chart}
            data={{
              dataSets: [
                {
                  label: '',
                  values: currency.sparkline_in_7d.price,
                  config: {
                    drawCircles: false,
                    drawHighlightIndicators: false,
                    color: COLOR_WHITE,
                  },
                },
              ],
            }}
            chartDescription={{text: ''}}
            legend={{enabled: false}}
            yAxis={{
              right: {
                enabled: false,
              },
              left: {
                enabled: false,
              },
            }}
            xAxis={{
              enabled: false,
            }}
          />
        </View>

        <Text style={styles.pricetext}>{currency.current_price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {height: 2, width: 0},
    shadowRadius: 3.84,
    shadowOpacity: 0.25,
    backgroundColor: 'white',
    elevation: 5,
    backgroundColor: '#14121E',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(128, 128, 128, 0.5)',
  },
  textName: {
    marginLeft: '4%',
    width: '20%',
    color: 'white',
  },
  pricetext: {
    overflow: 'scroll',
    width: '20%',
    color: 'white',
  },
  logo: {
    width: 30,
    height: 30,
  },
  chart: {
    flex: 1,
  },
  imageWrapper: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 6,
    borderRadius: 100,
  },
});
