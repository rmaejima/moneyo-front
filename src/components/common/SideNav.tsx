import React from 'react';

import logo from 'assets/logo.png';
import { BsGraphUp } from 'react-icons/bs';
import { FaHome, FaLayerGroup } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { UserProfile } from 'types/user';

import { UserProfileCard } from './UserProfileCard';

export const SIDENAV_WIDTH = '25rem';

export const SideNav: React.VFC = () => {
  const mockUserData: UserProfile = {
    userId: 'sample',
    name: '早起きするマン',
    experiencePoint: 23,
    experiencePointToNextLevel: 100,
    castlePoint: 10,
    level: 5,
  };

  return (
    <Container>
      <StyledLink to="/">
        <TitleLogo src={logo} />
      </StyledLink>
      <StyledUserProfileCard user={mockUserData} />
      <LinkArea>
        <li>
          <StyledLink to="/">
            <LinkBar>
              <FaHome />
              <p>HOME</p>
            </LinkBar>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/tags">
            <LinkBar>
              <FaLayerGroup />
              <p>GROUP</p>
            </LinkBar>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/finished">
            <LinkBar>
              <BsGraphUp />
              <p>GRAPH</p>
            </LinkBar>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/archived">
            <LinkBar>
              <FiSettings />
              <p>SETTINGS</p>
            </LinkBar>
          </StyledLink>
        </li>
      </LinkArea>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  width: ${SIDENAV_WIDTH};
  height: 100%;
  box-shadow: ${(p) => p.theme.shadows.lg};

  padding: 2rem 1rem;
`;

const TitleLogo = styled.img`
  display: block;
  width: 10rem;
  margin: 0 auto;
  margin-bottom: 2rem;
  color: ${(p) => p.theme.colors.text.base};
  font-size: 1.5rem;
`;

const StyledUserProfileCard = styled(UserProfileCard)`
  margin-bottom: 2rem;
`;

const LinkArea = styled.ul`
  > li {
    list-style: none;
  }

  > li:not(:first-child) {
    margin-top: 1rem;
  }
`;

const LinkBar = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 1rem 2rem;

  color: ${(p) => p.theme.colors.text.light};
  font-size: 1.25rem;
  font-weight: bold;

  transition: 0.3s ${(p) => p.theme.easings.easeOut};
  cursor: pointer;

  > p {
    margin-left: 1rem;
  }

  &:hover {
    opacity: 0.7;
    box-shadow: ${(p) => p.theme.shadows.md};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
