import React from 'react';

const Button = (props: any) => {
  const { name, handleClick } = props;
  return (
    <>
      <button onClick={() => handleClick()}>{name}</button>
    </>
  );
};

export default Button;
