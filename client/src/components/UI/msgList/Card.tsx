import React, { useState } from 'react';
import styled from 'styled-components';

const Card = (props: any) => {
  const { el, handleUpdate, handleDelete } = props;
  const [isEdit, setEdit] = useState(false);
  const [value, setValue] = useState('');

  // handling update input change
  const onUpdate = (text: string) => {
    setValue(text);
  };

  // handling edit
  const onEdit = (id: string, value: string) => {
    setEdit(!isEdit);
    if (isEdit) {
      handleUpdate(id, value);
      setValue('');
    }
  };

  return (
    <S.Wrapper>
      <S.Text>{el.username}</S.Text>
      <S.Text>{el.text}</S.Text>
      {isEdit && (
        <S.Input onChange={(e) => onUpdate(e.target.value)} value={value} />
      )}
      <S.Button onClick={() => onEdit(el.id, value)}>EDIT</S.Button>
      <S.Button onClick={() => handleDelete(el.id)}>DEL</S.Button>
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div`
    margin-top: 0.2rem;
    border: 1px solid black;
  `,
  Text: styled.div``,
  Input: styled.input``,
  Button: styled.button``
};

export default Card;
