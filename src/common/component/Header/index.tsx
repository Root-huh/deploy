import React from "react";
import { Flex, FlexProps } from "rebass";
import { DEFAULT_GUTTER_PX } from "common/constant";
import Search from "common/component/Search";
import styled from "styled-components";
import Menu from "common/component/Header/Menu";
import MyAccount from "common/component/Header/MyAccount";

interface IProps extends FlexProps {}

export default function Header({ ...rest }: IProps) {
  // TODO: 모바일 환경에서는 Header 컴포넌트가 상단 고정으로 이동
  return (
    <StyledFlex
      width="100%"
      height={HEADER_HEIGHT_PX}
      alignItems="center"
      px={DEFAULT_GUTTER_PX}
      {...rest}
    >
      <Menu width={`${LEFT_WIDTH}px`} />
      <Search width={`calc(100% - ${LEFT_WIDTH + RIGHT_WIDTH}px)`} />
      <MyAccount width={`${RIGHT_WIDTH}px`} />
    </StyledFlex>
  );
}

export const HEADER_HEIGHT = 100;
export const HEADER_HEIGHT_PX = `${HEADER_HEIGHT}px`;

export const LEFT_WIDTH = 300;
export const RIGHT_WIDTH = 400;

const StyledFlex = styled(Flex)`
  background-color: #282c34;
  border-bottom: solid 1px #4f5a70;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
`;
