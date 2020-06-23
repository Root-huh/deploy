import React, { InputHTMLAttributes, ChangeEvent } from "react";
import { useRef } from "react";
import styled, { CSSObject } from "styled-components";

interface IProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange?: (value: string | number, e: ChangeEvent<HTMLInputElement>) => void;
  style?: CSSObject;
}

export default function Input({ onChange, ...rest }: IProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <StyledInput
      ref={inputRef}
      onChange={e => {
        onChange && onChange(e.currentTarget.value, e);
      }}
      {...rest}
    />
  );
}

const StyledInput = styled.input`
  width: 100%;
  outline: 0;
  background-color: #3a404b;
  border: none;
  border-radius: 30px;
  height: 40px;
  padding: 5px 20px;
  color: white;
`;
