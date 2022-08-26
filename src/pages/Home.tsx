import React from 'react';

import { FaHome } from 'react-icons/fa';

import { PageSectionTitle, PageTitle } from 'components/common/PageTitle';
import { SafeArea } from 'components/common/SafeArea';
import { UserCard } from 'components/home/UserCard';

import { User } from 'types/user';

export const Home: React.VFC = () => {
  const mockUserData: User = {
    userId: 'sample',
    name: '早起きするマン',
    experiencePoint: 23,
    experiencePointToNextLevel: 100,
    castlePoint: 10,
    level: 5,
    bedTime: new Date(),
    wakeUpTime: new Date(),
  };
  return (
    <SafeArea>
      <PageTitle>
        <FaHome />
        <h1>HOME</h1>
      </PageTitle>
      <PageSectionTitle>勇者について</PageSectionTitle>
      <UserCard user={mockUserData} />
      <PageSectionTitle>城について</PageSectionTitle>
    </SafeArea>
  );
};
