import React from 'react';

const Heading = (props: any) => {
  const { title, handleClick } = props;

  return (
    <>
      <h1 onClick={() => handleClick()}>{title}</h1>
    </>
  );
};

export default Heading;
