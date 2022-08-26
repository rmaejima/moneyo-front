import styled from 'styled-components';

export const PageTitle = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 2rem;
  color: ${(p) => p.theme.colors.text.base};
  font-size: 2rem;
  font-weight: bold;

  > :not(:first-child) {
    margin-left: 1rem;
    color: ${(p) => p.theme.colors.text.base};
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const PageSectionTitle = styled.div`
  margin-bottom: 1.5rem;
  color: ${(p) => p.theme.colors.text.base};
  font-size: 1.5rem;
  font-weight: bold;
`;
