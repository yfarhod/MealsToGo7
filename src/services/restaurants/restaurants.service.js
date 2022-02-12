import { mocks } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

const restaurantTransform = (result) => {
  return result;
};
restaurantsRequest()
  .then(restaurantTransform)
  .then((transformedResult) => console.log(camelize(transformedResult)))
  .catch((err) => {
    console.log(err);
  });
