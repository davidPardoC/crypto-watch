import styled from 'styled-components/native';

export const ButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  padding-top: 5;
  padding-bottom: 5;
  justify-content: space-between;
  margin-top: 10;
`;

export const BuyButton = styled.TouchableOpacity`
  background-color: red;
  width: 48%;
  border-radius: 5;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top:10;
  padding-bottom: 10;
`;

export const SellButton = styled.TouchableOpacity`
  background-color: green;
  width: 48%;
  border-radius: 5;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 10;
  padding-bottom: 10;
`;
