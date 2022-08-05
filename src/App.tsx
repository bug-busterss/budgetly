import Demo from './Components/Modal';
import { AppShell, Container, Title } from '@mantine/core';
import HeaderTabsColored from './Components/DS_Header';
import { Route, Routes } from 'react-router-dom';
import { RegisterForm } from './Pages/Register';
import About from './Pages/About';
import Login from './Pages/Login';
import { Contactus } from './Pages/Contactus';
import Home from './Pages/Home';

function App() {
  return (
    <div className='App'>
      <AppShell>
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
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/login' element={<Login />} />
          <Route path='/aboutus' element={<About />} />
          <Route path='/contactus' element={<Contactus />} />
        </Routes>
      </AppShell>
    </div>
  );
}

export default App;
