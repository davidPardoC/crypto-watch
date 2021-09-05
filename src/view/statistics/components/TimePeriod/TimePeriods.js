import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Container, PeriodButton, TextPeriod} from './TimePeriods.styles';
export const TimePeriods = () => {
  const PERIODS = ['1m', '1H', '1D', '1W', '1M'];
  return (
    <Container>
      {PERIODS.map((item, index) => (
        <TouchableOpacity>
          <PeriodButton key={index}>
            <TextPeriod>{item}</TextPeriod>
          </PeriodButton>
        </TouchableOpacity>
      ))}
    </Container>
  );
};
