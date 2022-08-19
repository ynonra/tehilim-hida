import { convertNumericIndexToHebrew } from './gimatria-converter';
import hebrewDate from 'hebrew-date';

export const monthlyPartition = [
  0, 9, 17, 22, 28, 34, 38, 43, 48, 54, 59, 65, 68, 71, 76, 78, 82, 87, 89, 96,
  103, 105, 107, 112, 118, 118, 119, 134, 139, 144,
];

export const weeklyPartition = [0, 29, 50, 72, 89, 106, 119];

const hebrewDays = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];

export const getHebrewDay = () => hebrewDays[new Date().getDay()];

export const getHebrewDate = () =>
  convertNumericIndexToHebrew(hebrewDate(new Date()).date);

export const getChaptersPartitionData = (partitionType) => {
  let partitionData, partitionIndex;

  if (partitionType === 'weekly') {
    partitionData = weeklyPartition;
    partitionIndex = new Date().getDay();
  } else {
    partitionData = monthlyPartition;
    partitionIndex = hebrewDate(new Date()).date;
  }
  const startChapterIndex = partitionData[partitionIndex];
  const startChapter = convertNumericIndexToHebrew(startChapterIndex);
  const endChapter = partitionData[partitionIndex + 1]
    ? convertNumericIndexToHebrew(partitionData[partitionIndex + 1])
    : 'קנ';
  return { rangeStr: `${startChapter}-${endChapter}`, startChapterIndex };
};
