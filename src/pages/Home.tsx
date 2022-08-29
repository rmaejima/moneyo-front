import React from 'react';

import { FaHome } from 'react-icons/fa';
import styled from 'styled-components';

import { Button } from 'components/common/Button';
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
      <TitleSectionContainer>
        <StyledPageTitle>
          <FaHome />
          <h1>HOME</h1>
        </StyledPageTitle>
        {/* TODO:値によって制御 */}
        <Button>ベッドに入る</Button>
      </TitleSectionContainer>
      <SectionContainer>
        <PageSectionTitle>勇者について</PageSectionTitle>
        <UserCard user={mockUserData} />
      </SectionContainer>
      <SectionContainer>
        <PageSectionTitle>城について</PageSectionTitle>
        <p>現在開発中です</p>
      </SectionContainer>
    </SafeArea>
  );
};

const StyledPageTitle = styled(PageTitle)`
  margin-bottom: 0;
`;

const TitleSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 2rem;
`;

const SectionContainer = styled.div`
  margin-bottom: 3rem;
`;
