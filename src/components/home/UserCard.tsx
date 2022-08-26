import React from 'react';

import braveIcon from 'assets/user.png';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import styled from 'styled-components';

import { User } from 'types/user';

interface Props {
  user: User;
  className?: string;
}

export const UserCard: React.VFC<Props> = ({ user, className }) => {
  return (
    <Container className={className}>
      <CardMainContainer>
        <div>
          <UserNameText>{user.name}</UserNameText>
          <LevelText>Level: {user.level}</LevelText>
          <MeterContainer>
            <label>次のレベルまで</label>
            <meter
              max={user.experiencePointToNextLevel}
              value={user.experiencePoint}
            />
          </MeterContainer>
        </div>
        <div>
          <SleepTimeSection>
            <label>
              <RiMoonFill />
              {user.bedTime.toISOString()}
            </label>
            <label> ~</label>
            <label>
              <RiSunFill />
              {user.bedTime.toISOString()}
            </label>
          </SleepTimeSection>
        </div>
      </CardMainContainer>
      <BraveIcon src={braveIcon} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: #fff;
  box-shadow: ${(p) => p.theme.shadows.md};
  border-radius: 1rem;

  padding: 2rem;
`;

const SleepTimeSection = styled.div`
  color: ${(p) => p.theme.colors.text.light};
  > label {
    margin-right: 0.5rem;
  }
`;

const CardMainContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

const BraveIcon = styled.img`
  display: block;
  height: 15rem;
  padding: 1rem 5rem;
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
