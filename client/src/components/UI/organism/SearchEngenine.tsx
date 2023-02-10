import React from 'react';
import styled from 'styled-components';
import * as UI from '../index';

/**
 * 검색엔진 컴퍼넌트
 */
const SearchEngenine = () => {
  return (
    <S.Wrapper>
      <UI.Input hint="search..." />
      <UI.Button name="POST" />
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.form`
    display: flex;
    justify-content: space-between;
    height: 2rem;
  `
};

export default SearchEngenine;
