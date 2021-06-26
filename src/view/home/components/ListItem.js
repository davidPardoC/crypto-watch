import React from 'react';
import {View, Text, StyleSheet, Image, processColor} from 'react-native';
import {LineChart} from 'react-native-charts-wrapper';
const COLOR_BLACK = processColor('#000000');
export const ListItem = ({currency}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{uri: currency.image}} />
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
                  color: COLOR_BLACK,
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
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    padding: 10,
    borderRadius: 6,
    margin: '2%',
    shadowColor: '#000',
    shadowOffset: {height: 2, width: 0},
    shadowRadius: 3.84,
    shadowOpacity: 0.25,
    backgroundColor: 'white',
    elevation: 5,
  },
  textName: {
    marginLeft: '4%',
    width:'20%'
  },
  pricetext: {
    overflow:'scroll',
    width: '20%',
  },
  logo: {
    width: 30,
    height: 30,
  },
  chart: {
    flex: 1,
  },
});
