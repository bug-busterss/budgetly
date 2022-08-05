import Demo from './Components/Modal';
import { AppShell } from '@mantine/core';
import { useState } from 'react';
import HeaderTabsColored from './Components/DS_Header';

function App() {
  return (
    <div className='App'>
      <AppShell>
        <HeaderTabsColored
          user={{
            name: '',
            image: '',
          }}
          tabs={['Dashboard', 'Insights', 'About']}
        />
        <Demo />
      </AppShell>
    </div>
  );
}

export default App;
