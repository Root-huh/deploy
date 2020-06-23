import React from "react";
import { Flex, FlexProps } from "rebass";
import BrandIcon from "@material-ui/icons/BrandingWatermark";
import SearchIcon from "@material-ui/icons/Search";
import Input from "../Form/Input";

interface IProps extends Omit<FlexProps, "alignItems" | "justifyContent"> {}

export default function Search({ ...rest }: IProps) {
  return (
    <Flex alignItems="center" justifyContent="center" color="white" {...rest}>
      {/* TODO: 브랜드 로고 만들고 아래 아이콘 교체하기 */}
      <BrandIcon fontSize="large" />
      <Flex width="300px" ml="10px" alignItems="center">
        <Input
          placeholder="Please enter keywords.."
          style={{ paddingRight: "45px" }}
        />
        <SearchIcon fontSize="small" style={{ marginLeft: "-35px" }} />
      </Flex>
    </Flex>
  );
}
