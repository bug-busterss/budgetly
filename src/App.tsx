import Demo from './Components/Modal';
import { AppShell } from '@mantine/core';
import { useState } from 'react';
import HeaderTabsColored from './Components/DS_Header';
import { Route, Routes } from 'react-router-dom';
import { RegisterForm } from './Pages/Register';
import ExpenseCard from './Components/Card';

function App() {
  return (
    <div className='App'>
      <AppShell>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <HeaderTabsColored
                  user={{
                    name: '',
                    image: '',
                  }}
                  tabs={['Dashboard', 'Insights', 'About']}
                />
                <Demo />
                <ExpenseCard />
              </>
            }
          />
          <Route path='/register' element={<RegisterForm />} />
        </Routes>
      </AppShell>
    </div>
  );
}

export default App;
