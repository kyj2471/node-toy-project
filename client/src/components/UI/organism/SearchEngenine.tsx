import React from 'react';
import styled from 'styled-components';
import * as UI from '../index';

/**
 * 검색엔진 컴퍼넌트
 */
const SearchEngenine = (props: any) => {
  const { handlePostMsg, handleChange, value } = props;

  return (
    <S.Wrapper>
      <UI.Input hint="search..." handleChange={handleChange} value={value} />
      <UI.Button name="POST" handleClick={handlePostMsg} isPreventRender />
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
