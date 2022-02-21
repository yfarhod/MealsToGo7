import React, { createContext, useEffect, useState } from "react";

import { restaurantsRequest, restaurantTransform } from "./restaurants.service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantTransform)
        .then((result) => {
          setIsLoading(false);
          console.log(result);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);
  return (
    <RestaurantContext.Provider value={{ restaurants: [1, 2, 3] }}>
      {children}
    </RestaurantContext.Provider>
  );
};
