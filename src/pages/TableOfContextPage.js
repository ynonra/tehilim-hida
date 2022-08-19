import React from 'react';
import ChapterButton from '../components/ChapterButton';
import CenteredColumn from '../components/layout/CenteredColumn';

import Book from "../data/Psalms - he - Tanach with Ta'amei Hamikra.json";

function TableOfContextPage() {
  const chapterIndexes = Array(Book.length)
    .fill()
    .map((item, index) => index);
  return (
    <main className="my-5">
      <CenteredColumn>
        <section className="min-h-full flex flex-wrap gap-1.5 max-w-lg">
          {chapterIndexes.map((i) => (
            <ChapterButton chapterIndex={i} key={i} />
          ))}
        </section>
      </CenteredColumn>
    </main>
  );
}

export default TableOfContextPage;
