import React from 'react';
import { useNavigate } from 'react-router-dom';

function BigButton({ children, href, className, ...props }) {
  const navigate = useNavigate();

  const onClick = () => (href ? navigate(href) : undefined);

  return (
    <button
      className={
        'w-72 h-12 bg-lime-300 rounded-full font-medium hover:outline hover:outline-amber-300 hover:outline-offset-2 active:outline-amber-400 active:outline-offset-0 ' +
        className
      }
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default BigButton;
