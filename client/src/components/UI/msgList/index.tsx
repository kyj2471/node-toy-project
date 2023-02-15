import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import * as API from 'api';

/**
 * 카드 리스트 컴퍼넌트(MSG 리스트)
 */
const CardList = (props: any) => {
  const { list, handleGetMsg } = props;

  // msg update
  const handleUpdate = (id: string, value: string) => {
    const data = {
      text: value
    };
    API.updateMsg(id, data)
      .then(() => handleGetMsg())
      .catch(console.error);
  };

  // msg delete
  const handleDelete = (id: string) => {
    API.deleteMsg(id)
      .then(() => handleGetMsg())
      .catch((error) => console.error(error));
  };

  return (
    <S.Wrapper>
      {list.map((el: any, index: number) => (
        <Card
          key={index}
          el={el}
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
