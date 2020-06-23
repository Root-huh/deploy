import React from "react";
import { FlexProps, Flex, Box, Text } from "rebass";
import styled from "styled-components";

interface IProps extends Omit<FlexProps, "alignItems" | "justifyContent"> {}

export default function MyAccount({ ...rest }: IProps) {
  return (
    <Flex alignItems="center" justifyContent="flex-end" {...rest}>
      <StyledBoxProfile width="35px" height="35px" />
      <Text color="white" fontSize="12px" ml="5px">
        User Name
      </Text>
    </Flex>
  );
}

const StyledBoxProfile = styled(Box)`
  background-color: #4f5a70;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
`;
