import React from 'react';
import { useParams } from 'react-router-dom';
import CenteredColumn from '../components/layout/CenteredColumn';
import Tehelim from "../data/Psalms - he - Tanach with Ta'amei Hamikra.json";

function ChapterPage() {
  const { chapterIndex } = useParams();

  if (chapterIndex < 0 || chapterIndex > 150 || !chapterIndex)
    return <CenteredColumn className="my-5">מספר פרק לא תקין</CenteredColumn>;

  return (
    <CenteredColumn className="my-5">
      <article className="max-w-xl">{Tehelim[chapterIndex].join(' ')}</article>
    </CenteredColumn>
  );
}

export default ChapterPage;
