import { View } from "react-native";
import styled from "styled-components";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  left: "marginLeft",
  right: "marginRight",
  top: "marginTop",
  bottom: "marginBottom",
};

const getVariant = (position, size, theme) => {
  return `${positionVariant[position]}:${theme.space[sizeVariant[size]]}}`;
};

export const Spacer = styled(View)`
  ${({ position, size, theme }) => getVariant(position, size, theme)}
`;

Spacer.defaultProps = {
  position: "left",
  size: "small",
};
