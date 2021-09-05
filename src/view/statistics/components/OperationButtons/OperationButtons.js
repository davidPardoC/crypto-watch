import React from 'react';
import {Text} from 'react-native';
import {
  ButtonsContainer,
  BuyButton,
  SellButton,
} from './OperationButtons.styles';
export const OperationButtons = () => {
  return (
    <ButtonsContainer>
      <BuyButton>
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
          BUY
        </Text>
      </BuyButton>
      <SellButton>
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
          SELL
        </Text>
      </SellButton>
    </ButtonsContainer>
  );
};
