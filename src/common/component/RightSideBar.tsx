import React from "react";
import { Box, Flex, Text } from "rebass";
import { RIGHT_WIDTH } from "./Header";
import { DEFAULT_GUTTER_PX } from "common/constant";
import styled from "styled-components";

export default function RightSideBar() {
  return (
    <Flex
      flexDirection="column"
      flex={`0 0 ${RIGHT_WIDTH}px`}
      color="white"
      style={{ position: "relative" }}
    >
      <Box
        width={`${RIGHT_WIDTH}px`}
        style={{ position: "fixed" }}
        px={DEFAULT_GUTTER_PX}
      >
        {LIST_MAP.map((item, index) => (
          <StyledFlex key={index} mt="15px">
            <Text textAlign="center">{item.text}</Text>
          </StyledFlex>
        ))}
      </Box>
    </Flex>
  );
}

const LIST_MAP = [
  {
    text: "AD",
  },
  {
    text: "AD",
  },
  {
    text: "AD",
  },
  {
    text: "AD",
  },
  {
    text: "AD",
  },
];

const StyledFlex = styled(Flex)`
  align-items: center;
  justify-content: center;
  padding: 15px;
  height: 150px;
  background-color: #333333;
  border-radius: 6px;
`;
