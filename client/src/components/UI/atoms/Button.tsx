import React from 'react';

const Button = (props: any) => {
  const { name, handleClick, isPreventRender } = props;
  return (
    <>
      <button
        onClick={(e) => {
          isPreventRender && e.preventDefault();
          handleClick();
        }}>
        {name}
      </button>
    </>
  );
};

export default Button;
