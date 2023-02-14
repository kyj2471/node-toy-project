import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import * as UI from '../index';

/**
 * 상단 네비게이션 바
 */
const NavigationBar = () => {
  const router = useRouter();

  // handle routing
  const onLink = (url: string) => {
    router.push(url);
  };

  return (
    <S.Wrapper>
      <S.Title>잘지내...?</S.Title>
      <S.NavBox>
        <S.Tab onClick={() => onLink('/login')}>login</S.Tab>
        <S.Tab onClick={() => onLink('/')}>talk</S.Tab>
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
  `,
  Tab: styled.div``
};

export default NavigationBar;
