import React from "react";
import { Flex } from "rebass";
import { LEFT_WIDTH, RIGHT_WIDTH } from "./Header";
import styled from "styled-components";
import { DEFAULT_GUTTER_PX } from "common/constant";

export default function NewsFeed() {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      flex={`0 0 calc(100% - ${LEFT_WIDTH + RIGHT_WIDTH}px)`}
      px={DEFAULT_GUTTER_PX}
      pb="15px"
    >
      {LIST_MAP.map((_, index) => (
        <StyledFlex key={index} mt="30px" delayIndex={index} />
      ))}
    </Flex>
  );
}

const LIST_MAP = [
  {
    text: "#",
  },
  {
    text: "#",
  },
  {
    text: "#",
  },
  {
    text: "#",
  },
  {
    text: "#",
  },
  {
    text: "#",
  },
];

const StyledFlex = styled(Flex)<{ delayIndex: number }>`
  width: 80%;
  height: 100px;
  background-color: #555555;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  padding: 15px;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #444444, #555555);
    position: absolute;
    left: -100%;
    top: 0;
    animation: loading 2s linear infinite;
    animation-delay: ${props => props.delayIndex * 0.1}s;
    opacity: 0.5;
  }

  @keyframes loading {
    from {
      left: -100%;
    }
    to {
      left: 100%;
    }
  }
`;
