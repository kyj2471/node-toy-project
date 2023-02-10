import React from 'react';
import styled from 'styled-components';
import * as UI from 'components/UI';

const Card = (props: any) => {
  const { el } = props;

  return (
    <S.Wrapper>
      <UI.Text text={el.username} />
      <UI.Text text={el.text} />
      <UI.Button name="수정" />
      <UI.Button name="삭제" />
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div`
    margin-top: 0.2rem;
    border: 1px solid black;
  `
};

export default Card;
