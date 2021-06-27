import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export const ListTittle = () => {
  return (
    <View style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
      <View style={styles.container}>
        <View style={{...styles.textContainer, width: '35%'}}>
          <Text style={styles.titleText}>Currency</Text>
        </View>
        <View style={{...styles.textContainer, width: '35%'}}>
          <Text style={styles.titleText}>Last 7D</Text>
        </View>
        <View style={{...styles.textContainer, width: '25%'}}>
          <Text style={styles.titleText}>Price USD</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#39A2DB',
    marginTop: 5,
    borderRadius: 5,
  },
  textContainer: {
    paddingTop: 3,
    paddingBottom: 3,
    borderRightColor: 'white',
    borderRightWidth: 2,
  },
  titleText: {
    textAlign: 'center',
    color: 'white',
  },
});
