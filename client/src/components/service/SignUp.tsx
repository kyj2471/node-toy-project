import React from 'react';
import styled from 'styled-components';
import * as UI from 'components/UI';

const SignUp = () => {
  return (
    <S.Wrapper>
      <UI.NavBar />
      <UI.SignUp />
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div`
    max-width: 50%;
    margin: 0 auto;
  `
};

export default SignUp;
