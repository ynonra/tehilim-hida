import React from 'react';
import { Transition } from '@headlessui/react';

function Tooltip({ children, title, ...props }) {
  const [show, setShow] = React.useState(false);
  const timeoutId = React.useRef(null);

  const DELAY_BEFORE_SHOWING = 350;

  const showTooltip = () => {
    timeoutId.current = setTimeout(() => setShow(true), DELAY_BEFORE_SHOWING);
  };
  const hideTooltip = () => {
    clearTimeout(timeoutId.current);
    timeoutId.current = null;
    setShow(false);
  };

  return (
    <span
      className="relative"
      onMouseOverCapture={showTooltip}
      onMouseOut={hideTooltip}
    >
      {children}
      <Transition
        show={show}
        enter="transition-opacity duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <span
          className="absolute bottom-full left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800/80 rounded text-white whitespace-nowrap"
          //   style={{ display: show ? '' : 'none' }}
        >
          {title}
        </span>
      </Transition>
    </span>
  );
}

export default Tooltip;
