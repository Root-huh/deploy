import React from "react";
import { Flex, Text, Box } from "rebass";
import { LEFT_WIDTH } from "./Header";
import { DEFAULT_GUTTER_PX } from "common/constant";
import Icon from "@material-ui/icons/CardGiftcard";
import styled from "styled-components";

interface IProps {}

export default function LeftSideBar() {
  return (
    <Flex
      flexDirection="column"
      flex={`0 0 ${LEFT_WIDTH}px`}
      color="white"
      style={{ position: "relative" }}
    >
      <Box
        width={`${LEFT_WIDTH}px`}
        style={{ position: "fixed" }}
        px={DEFAULT_GUTTER_PX}
      >
        {LIST_MAP.map((item, index) => (
          <StyledFlex key={index} mt="15px" alignItems="center">
            <Icon fontSize="small" />
            <Text ml="5px" fontSize="13px">
              {item.text}
              {index + 1}
            </Text>
          </StyledFlex>
        ))}
        <Box height="1px" backgroundColor="#4f5a70" mt="15px" />
        {LIST_MAP.map((item, index) => (
          <StyledFlex key={index} mt="15px" alignItems="center">
            <Icon fontSize="small" />
            <Text ml="5px" fontSize="13px">
              {item.text}
              {index + 1}
            </Text>
          </StyledFlex>
        ))}
      </Box>
    </Flex>
  );
}

const LIST_MAP = [
  {
    icon: Icon,
    text: "Today Gift #",
  },
  {
    icon: Icon,
    text: "Today Gift #",
  },
  {
    icon: Icon,
    text: "Today Gift #",
  },
];

const StyledFlex = styled(Flex)`
  background-color: #555555;
  border-radius: 6px;
  padding: 10px 15px;
`;
