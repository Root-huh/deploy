import React from "react";
import { Flex } from "rebass";
import Header, { HEADER_HEIGHT_PX } from "common/component/Header";
import LeftSideBar from "common/component/LeftSideBar";
import RightSideBar from "common/component/RightSideBar";
import NewsFeed from "common/component/NewsFeed";
import styled from "styled-components";

export default function Home() {
  return (
    <Flex height="100%" flexDirection="column">
      <Header />
      <StyledBox>
        <LeftSideBar />
        <NewsFeed />
        <RightSideBar />
      </StyledBox>
    </Flex>
  );
}

const StyledBox = styled(Flex)`
  width: 100%;
  flex: 0 0 calc(100% - ${HEADER_HEIGHT_PX});
  margin-top: ${HEADER_HEIGHT_PX};
`;
