import React from 'react';
import styled from 'styled-components';

const Input = (props: any) => {
  const { value, handleChange, hint } = props;
  return (
    <>
      <S.Input type="text" placeholder={hint} />
    </>
  );
};

const S = {
  Input: styled.input`
    width: 100%;
  `
};

export default Input;
