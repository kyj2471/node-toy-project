import React from 'react';
import styled from 'styled-components';

/**
 * single input box
 */
const InputBox = (props: any) => {
  const { data, handleChange } = props;

  // input change
  const onHandleValue = (text: string) => {
    handleChange(text, data.id);
  };

  return (
    <S.Wrapper>
      <S.Guide>{data.id}</S.Guide>
      <S.Input
        type="text"
        placeholder={data.hint}
        value={data.value}
        onChange={(e) => onHandleValue(e.target.value)}
      />
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div`
    margin-top: 1rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  `,
  Guide: styled.div`
    font-weight: bold;
  `,
  Input: styled.input`
    width: 80%;
    height: 2rem;
  `
};

export default InputBox;
