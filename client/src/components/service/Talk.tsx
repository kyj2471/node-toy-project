import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import * as UI from 'components/UI';
import * as API from 'api';

const Home = () => {
  const [list, setList] = useState([]);
  const [name, setName] = useState('');

  // at rendering need chat data
  useEffect(() => {
    handleGetMsg();
    handleGetMe();
  }, []);

  // get my data
  const handleGetMe = () => {
    API.getMe()
      .then((res) => setName(res.data.username))
      .catch((error) => console.error(error));
  };

  // msg get
  const handleGetMsg = () => {
    API.getMsg()
      .then((res) => {
        setList(res.data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <S.Wrapper>
      <UI.NavBar />
      <UI.PostBox handleGetMsg={handleGetMsg} name={name} />
      <UI.MsgList list={list} handleGetMsg={handleGetMsg} />
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
