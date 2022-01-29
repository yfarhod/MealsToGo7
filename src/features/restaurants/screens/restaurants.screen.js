import React from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;

const SearchView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const ListView = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const RestaurantsScreen = () => (
  <SafeAreaContainer>
    <SearchView>
      <Searchbar placeholder="Search" />
    </SearchView>
    <ListView>
      <RestaurantInfoCard />
    </ListView>
  </SafeAreaContainer>
);
