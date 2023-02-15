import React from 'react';
import styled from 'styled-components';

const Submit = (props: any) => {
  const { handleSubmit } = props;

  return (
    <>
      <S.Button onClick={() => handleSubmit()}>submit</S.Button>
    </>
  );
};

const S = {
  Button: styled.button``
};

export default Submit;
