import React from 'react';

const Text = (props: any) => {
  const { text } = props;

  return (
    <>
      <div>{text}</div>
    </>
  );
};

export default Text;
