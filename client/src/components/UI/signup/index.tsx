import React, { useState } from 'react';
import { useRouter } from 'next/router';
import InputBox from '../form/InputBox';
import { useInputChange } from 'hooks/useInputChange';
import Submit from '../form/Submit';
import * as C from 'constants/auth';
import * as API from 'api';

const SignUp = () => {
  const [list, setList] = useState(C.SIGN_UP_INPUT_LIST);
  const router = useRouter();

  // handle input change logic
  const handleChange = (text: any, id: any) => {
    const _result = useInputChange(list, text, id);
    setList(_result);
  };

  // signup submit
  const handleSubmit = () => {
    const _data = {
      name: list[0].value,
      password: list[1].value,
      username: list[2].value,
      email: list[3].value
    };
    API.postSignUp(_data)
      .then(() => {
        router.push('/login');
        onResetValue();
      })
      .catch((err) => console.error(err));
  };

  // reset value, state
  const onResetValue = () => {
    setList(C.SIGN_UP_INPUT_LIST);
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

export default SignUp;
