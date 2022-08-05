import Demo from './Components/Modal';
import { AppShell, Container, Title } from '@mantine/core';
import { useState } from 'react';
import HeaderTabsColored from './Components/DS_Header';
import { Route, Routes } from 'react-router-dom';
import { RegisterForm } from './Pages/Register';
import ExpenseCard from './Components/Card';
import { Footer } from './Components/Footer';
import About from './Pages/About';
import Login from './Pages/Login';
import { Contactus } from './Pages/Contactus';
import HistoryCard from './Components/HistoryCard';

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
                  links={[
                    {
                      label: 'Home',
                      link: '/',
                    },
                    {
                      label: 'Contact Us',
                      link: '/contactus',
                    },
                    {
                      label: 'About',
                      link: '/aboutus',
                    },
                  ]}
                />
                <Container>
                  <ExpenseCard />
                  <Title mt='lg'>History</Title>
                  <HistoryCard />
                  <HistoryCard />
                  <HistoryCard />
                  <HistoryCard />
                </Container>
              </>
            }
          />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/contactus' element={<Contactus />} />
        </Routes>
        <Footer />
      </AppShell>
    </div>
  );
}

export default App;
