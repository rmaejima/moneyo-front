import React from 'react';

import castleIcon from 'assets/castle.png';
import styled from 'styled-components';

import { User } from 'types/user';

interface Props {
  castle: Pick<User, 'castleName' | 'castlePoint'>;
  className?: string;
}

export const CastleCard: React.VFC<Props> = ({ castle, className }) => {
  return (
    <Container className={className}>
      <CastleNameText>{castle.castleName}</CastleNameText>
      <CastleIcon src={castleIcon} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: ${(p) => p.theme.shadows.md};
  border-radius: 1rem;

  padding: 2rem;
`;

const CastleNameText = styled.h1`
  margin-bottom: 0.5rem;
  color: ${(p) => p.theme.colors.text.base};
  font-size: 1.5rem;
`;

const CastleIcon = styled.img`
  display: block;
  height: 20rem;
  margin: 0 auto;
`;
