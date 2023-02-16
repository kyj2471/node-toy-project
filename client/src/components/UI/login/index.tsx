import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import InputBox from '../form/InputBox';
import { useInputChange } from 'hooks/useInputChange';
import Submit from '../form/Submit';
import * as C from 'constants/auth';
import * as API from 'api';

const Login = () => {
  const [list, setList] = useState(C.LOGIN_INPUT_LIST);
  const [cookies, setCookie, removeCookie] = useCookies();
  const router = useRouter();

  // handle input change logic
  const handleChange = (text: any, id: any) => {
    const _result = useInputChange(list, text, id);
    setList(_result);
  };

  // submit login
  const handleSubmit = () => {
    const _data = {
      username: list[0].value,
      password: list[1].value
    };
    API.postLogin(_data)
      .then((res) => {
        const _token = res.data.token;
        setCookie('token', _token);
        onLinkHome();
        onResetValue();
      })
      .catch((error) => console.error(error));
  };

  // link to home
  const onLinkHome = () => {
    router.push('/');
  };

  // reset input value
  const onResetValue = () => {
    setList(C.LOGIN_INPUT_LIST);
  };

  return (
    <>
      {list.map((data: any, index: number) => (
        <InputBox key={index} data={data} handleChange={handleChange} />
      ))}
      <Submit handleSubmit={handleSubmit} />
    </>
  );
};

export default Login;
