import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import * as UI from 'components/UI';
import * as API from 'components/api/message';

const Home = () => {
  const [list, setList] = useState([]);

  // at rendering need chat data
  useEffect(() => {
    handleGetMsg();
  }, []);

  // msg get
  const handleGetMsg = () => {
    API.getMsg()
      .then((res) => setList(res.data))
      .catch((error) => console.error(error));
  };

  return (
    <S.Wrapper>
      <UI.NavBar />
      <UI.PostBox handleGetMsg={handleGetMsg} />
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
