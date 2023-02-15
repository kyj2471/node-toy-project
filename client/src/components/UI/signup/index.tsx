import React, { useState } from 'react';
import InputBox from '../form/InputBox';
import * as C from 'components/constants/auth';
import { useInputChange } from 'components/hooks/useInputChange';

const SignUp = () => {
  const [list, setList] = useState(C.SIGN_UP_INPUT_LIST);

  // handle input change logic
  const handleChange = (text: any, id: any) => {
    const result = useInputChange(list, text, id);
    setList(result);
  };

  return (
    <>
      {list.map((data: any, index: number) => (
        <InputBox key={index} data={data} handleChange={handleChange} />
      ))}
    </>
  );
};

export default SignUp;
