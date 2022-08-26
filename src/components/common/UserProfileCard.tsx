import React from 'react';

import braveIcon from 'assets/user.png';
import styled from 'styled-components';

import { UserProfile } from 'types/user';

interface Props {
  user: UserProfile;
  className?: string;
}

export const UserProfileCard: React.VFC<Props> = ({ user, className }) => {
  return (
    <Container className={className}>
      <UserNameText>{user.name}</UserNameText>
      <LevelText>Level: {user.level}</LevelText>
      <MeterContainer>
        <label>次のレベルまで</label>
        <meter
          max={user.experiencePointToNextLevel}
          value={user.experiencePoint}
        />
      </MeterContainer>
      <BraveIcon src={braveIcon} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  box-shadow: ${(p) => p.theme.shadows.md};
  border-radius: 1rem;

  padding: 1rem;
`;

const BraveIcon = styled.img`
  display: block;
  padding: 1rem 5rem;
  width: 100%;
`;

const UserNameText = styled.h1`
  margin-bottom: 0.5rem;
  color: ${(p) => p.theme.colors.text.base};
  font-size: 1.5rem;
`;

const MeterContainer = styled.div`
  color: ${(p) => p.theme.colors.text.base};
  font-weight: bold;
  > :first-child {
    margin-right: 0.5rem;
  }
`;

const LevelText = styled.p`
  margin-bottom: 0.25rem;
  color: ${(p) => p.theme.colors.text.base};
  font-size: 1.25rem;
  font-weight: bold;
`;
