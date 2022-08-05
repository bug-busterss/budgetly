import { AppShell } from '@mantine/core';
import React from 'react';
import { UserInfoIcons } from '../Components/Aboutcard';

const About = () => {
  return (
    <div>
      <AppShell>
        <UserInfoIcons
          avatar={'string'}
          name={'string'}
          title={'string'}
          phone={'string'}
          email={'string'}
        />
      </AppShell>
    </div>
  );
};

export default About;
