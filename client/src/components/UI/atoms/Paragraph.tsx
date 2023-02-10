import React from 'react';
import styled from 'styled-components';

const Paragraph = (props: any) => {
  const { text, handleClick } = props;
  return (
    <>
      <S.Text onClick={() => handleClick()}>{text}</S.Text>
    </>
  );
};

const S = {
  Text: styled.p``
};

export default Paragraph;
