import React from 'react';
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';

function NavArrowButton({ type, className }) {
  const navigate = useNavigate();
  const { chapterNumber } = useParams();

  const url =
    type === 'forwards'
      ? '/chapter/' + (+chapterNumber + 1)
      : '/chapter/' + (chapterNumber - 1);

  const onClick = () => navigate(url);

  return (
    <button
      className={`w-10 h-10 p-0 backdrop-blur-sm bg-amber-500/50 sm:bg-amber-300 flex items-center justify-center rounded-full text-2xl shadow ${className}`}
      onClick={onClick}
    >
      {type === 'forwards' ? <MdChevronLeft /> : <MdChevronRight />}
    </button>
  );
}

export default NavArrowButton;
