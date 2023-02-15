import React, { useState } from 'react';
import styled from 'styled-components';
import * as API from 'api/message';

/**
 * 검색엔진 컴퍼넌트
 */
const SearchEngenine = (props: any) => {
  const { handleGetMsg, name } = props;
  const [value, setValue] = useState('');

  // msg post
  const onPost = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      text: value,
      username: name
    };
    API.postMsg(data)
      .then(() => {
        handleGetMsg();
        onResetValue();
      })
      .catch((error) => console.error(error));
  };

  // change input value
  const onChange = (text: string) => {
    setValue(text);
  };

  // reset input value
  const onResetValue = () => {
    setValue('');
  };

  return (
    <S.Wrapper onSubmit={onPost}>
      <S.Input onChange={(e) => onChange(e.target.value)} value={value} />
      <S.Button onClick={(e) => onPost(e)}>POST</S.Button>
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.form`
    display: flex;
    justify-content: space-between;
    height: 2rem;
  `,
  Input: styled.input`
    width: 100%;
  `,
  Button: styled.button``
};

export default SearchEngenine;
