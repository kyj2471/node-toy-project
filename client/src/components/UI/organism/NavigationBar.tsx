import React from 'react';
import styled from 'styled-components';
import * as UI from '../index';

/**
 * 상단 네비게이션 바
 */
const NavigationBar = (props: any) => {
  return (
    <S.Wrapper>
      <UI.Heading title={'잘지내...?'} />
      <S.NavBox>
        <UI.Paragraph text={'login'} />
        <UI.Paragraph text={'talk'} />
      </S.NavBox>
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Title: styled.h1``,
  NavBox: styled.div`
    width: 30%;
    display: flex;
    justify-content: space-between;
  `
};

export default NavigationBar;
