import React from "react";
import { Card } from "react-native-paper";

import styled from "styled-components/native";

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  padding: ${(props) => props.theme.space[3]};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    ],
    adress = "100 some street",
    isOpenNow = true,
    rating = 4,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        key={name}
        source={{
          uri: photos[0],
        }}
      />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
