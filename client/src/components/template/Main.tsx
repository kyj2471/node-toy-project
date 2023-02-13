import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Axios from 'components/libraries/axios';
import * as UI from 'components/UI';

const Home = () => {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    handleGetMsg();
  }, []);

  // msg get
  const handleGetMsg = () => {
    Axios.get('/messages').then((res) => {
      setList(res.data);
    });
  };

  // msg post
  const handlePostMsg = () => {
    const data = {
      text: value,
      username: 'tonyK',
      name: 'test'
    };
    Axios.post('/messages', data).then((res) => {
      if (res.status === 201) {
        handleGetMsg();
      }
    });
    handleResetValue();
  };

  // msg delete
  const handleDelete = (id: any) => {
    Axios.delete(`/messages/${id}`).then((res) => {
      if (res.status === 200) {
        setList(res.data);
      }
    });
  };

  // msg update
  const handleUpdate = (id: any) => {
    const data = {
      text: 'i dont like this'
    };
    Axios.put(`messages/${id}`, data)
      .then((res) => {
        if (res.status === 200) {
          setList((msg: any) =>
            msg.map((item: any) => (item.id === res.data.id ? res.data : item))
          );
        }
      })
      .catch((err) => console.error(err));
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
