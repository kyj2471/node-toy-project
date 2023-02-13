import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as UI from 'components/UI';
import * as API from 'components/api/message';

const Home = () => {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    handleGetMsg();
  }, []);

  // msg get
  const handleGetMsg = () => {
    API.getMsg()
      .then((res) => setList(res.data))
      .catch((error) => console.error(error));
  };

  // msg post
  const handlePostMsg = () => {
    const data = {
      text: value,
      username: 'tonyK',
      name: 'test'
    };
    API.postMsg(data)
      .then(() => {
        handleResetValue();
        handleGetMsg();
      })
      .catch((error) => console.error(error));
  };

  // msg delete
  const handleDelete = (id: any) => {
    API.deleteMsg(id) //
      .then((res) => setList(res.data))
      .catch((error) => console.error(error));
  };

  // msg update
  const handleUpdate = (id: any) => {
    const data = {
      text: 'i dont like this'
    };
    API.updateMsg(id, data)
      .then((res) => {
        setList((msg: any) =>
          msg.map((item: any) => (item.id === res.data.id ? res.data : item))
        );
      })
      .catch((error) => console.error(error));
  };

  // search input value change
  const handleValue = (text: string) => {
    setValue(text);
  };

  // search input value reset
  const handleResetValue = () => {
    setValue('');
  };

  return (
    <S.Wrapper>
      <UI.NavigationBar />
      <UI.SearchEngenine
        handlePostMsg={handlePostMsg}
        handleChange={handleValue}
        value={value}
      />
      <UI.CardList
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        list={list}
      />
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
