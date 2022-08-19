import React from 'react';
import { MdChevronRight, MdOutlineHome } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const goBack = () => navigate(-1);
  const goHome = () => navigate('/');

  return (
    <nav className="h-14 w-full bg-amber-200 flex justify-between items-center px-4 shrink-0  text-xl">
      <div className="flex items-center">
        <button
          className={`${
            location.pathname === '/' ? 'invisible' : ''
          } w-10 h-10 p-0 bg-amber-300 flex items-center justify-center rounded-full text-2xl ml-2 shadow`}
          onClick={goBack}
        >
          <MdChevronRight />
        </button>
        <span className="font-medium text-lg sm:text-xl">
          תהילים עם פירוש החיד"א
        </span>
      </div>
      <div className="flex items-center">
        <button
          className={`${
            location.pathname === '/' ? 'invisible' : ''
          } w-10 h-10 p-0 bg-amber-300 flex items-center justify-center rounded-full text-2xl shadow`}
          onClick={goHome}
        >
          <MdOutlineHome />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
