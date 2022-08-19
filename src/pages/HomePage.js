import React from 'react';
import BigButton from '../components/BigButton';
import CenteredColumn from '../components/layout/CenteredColumn';
import {
  getChaptersPartitionData,
  getHebrewDate,
  getHebrewDay,
} from '../utils/chapters-partition';

function HomePage() {
  const weeklyPartitionData = getChaptersPartitionData('weekly');
  const monthlyPartitionData = getChaptersPartitionData('monthly');

  return (
    <CenteredColumn>
      <div className="flex flex-col items-center justify-center gap-2">
        <BigButton
          className="flex flex-col items-center"
          href={`/chapter/${monthlyPartitionData.startChapterIndex + 1}`}
        >
          לימוד ל-{getHebrewDate() + "' בחודש"}
          <span className="text-base font-normal leading-4 text-black/60">
            ({monthlyPartitionData.rangeStr})
          </span>
        </BigButton>
        <BigButton
          className="flex flex-col items-center"
          href={`/chapter/${weeklyPartitionData.startChapterIndex + 1}`}
        >
          לימוד ליום {getHebrewDay() + ' '}
          <span className="text-base font-normal leading-4 text-black/60">
            ({weeklyPartitionData.rangeStr})
          </span>
        </BigButton>
        <BigButton href="/table-of-context">בחר פרק</BigButton>
        {/* <BigButton>נפתחו לאחרונה</BigButton> */}
      </div>
    </CenteredColumn>
  );
}

export default HomePage;
