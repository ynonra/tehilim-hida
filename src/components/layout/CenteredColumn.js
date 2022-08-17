import React from 'react';

function CenteredColumn({ children, className, ...props }) {
  return (
    <div
      className={`h-full flex flex-col items-center justify-center ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default CenteredColumn;
