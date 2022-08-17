import React from 'react';
import BigButton from '../components/BigButton';
import CenteredColumn from '../components/layout/CenteredColumn';

function HomePage() {
  return (
    <CenteredColumn>
      <div className="flex flex-col items-center justify-center gap-2 mt-[26vh]">
        <BigButton>לימוד חודשי</BigButton>
        <BigButton>לימוד שבועי</BigButton>
        <BigButton href="/table-of-context">בחר פרק</BigButton>
        <BigButton>נפתחו לאחרונה</BigButton>
      </div>
    </CenteredColumn>
  );
}

export default HomePage;
