import React, { useState } from 'react';
import { useRouter } from 'next/router';
import InputBox from '../form/InputBox';
import { useInputChange } from 'components/hooks/useInputChange';
import Submit from '../form/Submit';
import * as C from 'components/constants/auth';
import * as API from 'components/api/auth';

const Login = () => {
  const [list, setList] = useState(C.LOGIN_INPUT_LIST);
  const router = useRouter();

  // handle input change logic
  const handleChange = (text: any, id: any) => {
    const result = useInputChange(list, text, id);
    setList(result);
  };

  // submit login
  const handleSubmit = () => {
    const data = {
      username: list[0].value,
      password: list[1].value
    };
    API.postLogin(data)
      .then(() => {
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
