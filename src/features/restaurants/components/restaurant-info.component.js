import React from "react";
import { Card, Title } from "react-native-paper";
import { StyleSheet } from "react-native";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photo = [
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    ],
    adress = "100 some street",
    isOpenNow = true,
    rating = 4,
  } = restaurant;
  return (
    <Card>
      <Card.Cover
        source={{
          uri: { photo },
        }}
        style={styles.cardCover}
      />
      <Card.Content>
        <Title>{name}</Title>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardCover: {
    margin: 10,
  },
});
