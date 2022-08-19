import React from 'react';
import { useParams } from 'react-router-dom';
import { MdChevronRight } from 'react-icons/md';
import tehelim from "../data/Psalms - he - Tanach with Ta'amei Hamikra.json";
import chomatAnakh from '../data/Chomat Anakh on Psalms - he - Chomat Anakh, Jerusalem 1965.json';
import { convertNumericIndexToHebrew } from '../utils/gimatria-converter';

import CenteredColumn from '../components/layout/CenteredColumn';
import NavArrowButton from '../components/NavArrowButton';

function ChapterPage() {
  const [openPerush, setOpenPerush] = React.useState(false);
  const [selectedPasukIndex, setSelectedPasukIndex] = React.useState(null);
  const { chapterNumber } = useParams();
  const tehilimArticle = React.useRef(null);

  React.useEffect(() => {
    tehilimArticle?.current.scrollTo(0, 0);
  }, [chapterNumber]);

  if (
    Number.isNaN(+chapterNumber) ||
    chapterNumber < 1 ||
    chapterNumber > 150 ||
    !chapterNumber
  )
    return <CenteredColumn className="my-5">מספר פרק לא תקין</CenteredColumn>;

  const chapterIndex = chapterNumber - 1;

  const chapterPerush = chomatAnakh[chapterIndex];
  const thereIsAnyPerush = chapterPerush?.length;

  const closePerushHandler = () => {
    setOpenPerush(false);
    setSelectedPasukIndex(null);
  };
  const togglePerushHandler = () => {
    if (openPerush) {
      closePerushHandler();
    } else {
      setOpenPerush(true);
    }
  };

  const selectPasukHandler = (index) => {
    setSelectedPasukIndex(index);
    setOpenPerush(true);

    document.querySelector(`#pasuk-${index}-p-0`).scrollIntoView();
  };

  const hightlightTextStyle = {
    textShadow: '1px 1px 2px #ffff00ff',
  };

  return (
    <main className="mb-10 grow h-full min-h-0">
      <CenteredColumn className="grow h-full">
        <div className="flex items-center overflow-y-auto grow h-full">
          {chapterIndex > 0 ? (
            <NavArrowButton
              type="backwards"
              className="shrink-0 mx-1 fixed bottom-12 right-2 sm:static"
            />
          ) : null}
          {chapterIndex < 149 ? (
            <NavArrowButton
              type="forwards"
              className="shrink-0 order-3 mx-1 fixed bottom-12 left-2 sm:static"
            />
          ) : null}
          <article
            className="max-w-xl overflow-y-auto grow h-full pt-3 pb-14 sm:p-4 px-2 sm:px-0"
            ref={tehilimArticle}
          >
            <h1 className="text-xl mr-0 mb-3 font-light underline">
              {convertNumericIndexToHebrew(chapterIndex)}
            </h1>
            {tehelim[chapterIndex].map((text, pasukIndex) => {
              const pasukPerush = chapterPerush?.[pasukIndex];
              const thereIsPerush = pasukPerush?.length;
              const onClick = () => {
                if (!thereIsPerush) return;
                selectPasukHandler(pasukIndex);
              };
              return (
                <React.Fragment key={pasukIndex}>
                  <span className="align-middle text-2xl">
                    <span className="text-sm align-middle text-gray-500 ">
                      {' '}
                      {convertNumericIndexToHebrew(pasukIndex)}{' '}
                    </span>
                    <span
                      className={`font-tanach ${
                        thereIsPerush ? 'cursor-pointer' : ''
                      }`}
                      onClick={onClick}
                      style={thereIsPerush ? hightlightTextStyle : {}}
                    >
                      {text}
                    </span>
                  </span>
                  {+chapterIndex === 118 && (pasukIndex + 1) % 8 === 0 ? (
                    <div className="mb-1.5" />
                  ) : null}
                </React.Fragment>
              );
            })}
          </article>
        </div>
        {thereIsAnyPerush ? (
          <section
            className={`fixed max-w-xl w-full left-1/2 -translate-x-1/2  ${
              openPerush ? 'top-[20vh] hover:-mt-10' : 'top-full hover:-mt-11'
            } -mt-10 flex flex-col items-center transition-all shadow white-bg-scrollbar`}
          >
            <div
              className={`h-10 flex items-center justify-between bg-lime-600 self-stretch rounded-t-lg text-white px-4 cursor-pointer transition-all ${
                openPerush ? 'hover:translate-y-0.5 hover:mb-0.5' : ''
              }`}
              onClick={togglePerushHandler}
            >
              <span>פירוש החיד"א</span>
              <MdChevronRight
                className={`${
                  openPerush ? 'rotate-90' : '-rotate-90'
                } text-2xl`}
              />
            </div>
            <article className="overflow-auto bg-white h-[80vh] px-3 pb-3">
              {chapterPerush.map((pasukPerush, pasukIndex) => {
                if (!pasukPerush?.length) return null;

                return pasukPerush.map((text, paragraphIndex) => {
                  return (
                    <p
                      key={`pasuk-${pasukIndex}-perush-p-${paragraphIndex}`}
                      className="align-middle text-xl my-1"
                      id={`pasuk-${pasukIndex}-p-${paragraphIndex}`}
                    >
                      {paragraphIndex === 0 ? (
                        <span className="text-sm align-middle mx-1.5 text-gray-500 ">
                          {convertNumericIndexToHebrew(pasukIndex)}
                        </span>
                      ) : null}
                      <span
                        // className="font-tanach"
                        style={
                          selectedPasukIndex === pasukIndex
                            ? hightlightTextStyle
                            : {}
                        }
                        dangerouslySetInnerHTML={{ __html: text }}
                      />
                    </p>
                  );
                });
              })}
            </article>
          </section>
        ) : null}
      </CenteredColumn>
    </main>
  );
}

export default ChapterPage;
