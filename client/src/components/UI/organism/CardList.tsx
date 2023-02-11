import React from 'react';
import styled from 'styled-components';
import * as UI from 'components/UI';

/**
 * 카드 리스트 컴퍼넌트(MSG 리스트)
 */
const CardList = (props: any) => {
  const { list, handleUpdate, handleDelete } = props;

  return (
    <S.Wrapper>
      {list.map((talk: any, index: number) => (
        <UI.Card
          key={index}
          el={talk}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
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
