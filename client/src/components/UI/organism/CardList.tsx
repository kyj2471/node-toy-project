import React from 'react';
import styled from 'styled-components';
import { DUMMY_DATA } from 'components/dummy/data';
import * as UI from 'components/UI';

/**
 * 카드 리스트 컴퍼넌트(MSG 리스트)
 */
const CardList = (props: any) => {
  const { list } = props;

  return (
    <S.Wrapper>
      {DUMMY_DATA.map((talk, index) => (
        <UI.Card key={index} el={talk} />
      ))}
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.section`
    margin-top: 1.2rem;
  `
};

export default CardList;
