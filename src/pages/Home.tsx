import React from 'react';

import { FaHome } from 'react-icons/fa';
import styled from 'styled-components';

import { Button } from 'components/common/Button';
import { PageSectionTitle, PageTitle } from 'components/common/PageTitle';
import { SafeArea } from 'components/common/SafeArea';
import { CastleCard } from 'components/home/CastleCard';
import { UserCard } from 'components/home/UserCard';
import { BedInDialogProvider } from 'components/settings/BedInDialogProvider';

import { useUser } from 'utils/apis/user';

export const Home: React.VFC = () => {
  const { user, isLoading } = useUser('test_user');
  return (
    <SafeArea>
      <TitleSectionContainer>
        <StyledPageTitle>
          <FaHome />
          <h1>HOME</h1>
        </StyledPageTitle>
        {/* TODO:値によって制御 */}
        <BedInDialogProvider>
          <Button>ベッドに入る</Button>
        </BedInDialogProvider>
      </TitleSectionContainer>
      <SectionContainer>
        <PageSectionTitle>勇者について</PageSectionTitle>
        {isLoading && <p>ロード中</p>}
        {user && <UserCard user={user} />}
      </SectionContainer>
      <SectionContainer>
        <PageSectionTitle>城について</PageSectionTitle>
        {isLoading && <p>ロード中</p>}
        {user && <CastleCard castle={user} />}
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
