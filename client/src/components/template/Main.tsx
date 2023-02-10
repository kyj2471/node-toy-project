import React from 'react';
import styled from 'styled-components';
import Axios from 'components/libraries/axios';
import * as UI from 'components/UI';

const Home = () => {
  // msg 받아오기
  const handleGetIdMsg = () => {
    Axios.get('/messages/2').then((res) => console.log(res));
  };

  // msg 등록
  const handlePostMsg = () => {
    Axios.post('/messages', 'tony').then((res) => console.log(res));
  };

  // msg 삭제
  const handleDeleteMsg = () => {
    Axios.post('/messages/1').then((res) => console.log(res));
  };

  // msg 업데이트
  const handleUpdateMsg = () => {
    Axios.put('messages/1', 'change').then((res) => console.log(res));
  };

  return (
    <S.Wrapper>
      <UI.NavigationBar />
      <UI.SearchEngenine />
      <UI.CardList />
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div`
    max-width: 50%;
    margin: 0 auto;
  `
};

export default Home;
