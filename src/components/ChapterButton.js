import React from 'react';
import { convertNumericIndexToHebrew } from '../utils/gimatria-converter';
import Tooltip from './Tooltip';
import Tehelim from "../data/Psalms - he - Tanach with Ta'amei Hamikra.json";
import { useNavigate } from 'react-router-dom';

function ChapterButton({ chapterIndex, ...props }) {
  const label = convertNumericIndexToHebrew(chapterIndex);
  const firstPasuk = Tehelim[chapterIndex][0];
  const chapterBegining = `${
    firstPasuk.match(/^([^\s]+?[\s׃]){3}/)?.[0] || firstPasuk.slice(0, 30)
  }…`;

  const navigate = useNavigate();
  const onClick = () => navigate(`/chapter/${chapterIndex + 1}`);

  return (
    <Tooltip title={chapterBegining} titleClassName="font-tanach text-lg">
      <button
        className="w-11 h-11 bg-lime-300 rounded-full hover:outline hover:outline-amber-300 hover:outline-offset-2 active:outline-amber-400 active:outline-offset-0"
        onClick={onClick}
        {...props}
      >
        {label}
      </button>
    </Tooltip>
  );
}

export default ChapterButton;
