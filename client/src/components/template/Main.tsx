import React, { useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'components/libraries/axios';
import * as UI from 'components/UI';

const Home = () => {
  useEffect(() => {
    handleGetIdMsg();
  }, []);

  // msg 받아오기
  const handleGetIdMsg = () => {
    Axios.get('/messages').then((res) => console.log(res));
  };

  // msg 등록
  const handlePostMsg = () => {
    const data = {
      text: 'new test221safddsa',
      username: 'tonyK',
      name: 'tonyK'
    };
    Axios.post('/messages', data).then((res) => console.log(res));
  };

  // msg 삭제
  const handleDelete = (id: any) => {
    Axios.delete(`/messages/${id}`).then((res) => console.log(res));
  };

  // msg 업데이트
  const handleUpdate = (id: any) => {
    const data = {
      text: 'i dont like this'
    };
    Axios.put(`messages/${id}`, data).then((res) => console.log(res));
  };

  return (
    <S.Wrapper>
      <UI.NavigationBar />
      <UI.SearchEngenine handlePostMsg={handlePostMsg} />
      <UI.CardList handleDelete={handleDelete} handleUpdate={handleUpdate} />
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
