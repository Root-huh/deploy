import React from "react";
import { FlexProps, Flex, Text } from "rebass";
import HomeIcon from "@material-ui/icons/Home";
import BookIcon from "@material-ui/icons/MenuBook";
import SettingIcon from "@material-ui/icons/Settings";

interface IProps extends Omit<FlexProps, "alignItems" | "color"> {}

// TODO: 링크 연결 및 리액트 라우터 적용하기
export default function Menu({ ...rest }: IProps) {
  return (
    <Flex alignItems="center" color="white" {...rest}>
      {MENU_LIST.map(({ Component, text }, index) => (
        <Flex
          key={index}
          width="66px"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Component />
          <Text fontSize="12px" mt="5px">
            {text}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
}

const MENU_LIST = [
  {
    Component: HomeIcon,
    text: "Home",
  },
  {
    Component: BookIcon,
    text: "Booking",
  },
  {
    Component: SettingIcon,
    text: "Setting",
  },
];
