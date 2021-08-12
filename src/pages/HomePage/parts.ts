import styled from 'styled-components';
import Page from 'src/components/Page';
import theme from 'src/features/App/GlobalStyle/theme';

export const StyledHomePage = styled(Page)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Section = styled.section`
  border-bottom: 1px solid ${theme.colors.black.c};
  padding: ${theme.offset(5)};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  opacity: 0.2;
  transition: 0.3s opacity;

  &:hover {
    opacity: 1;
  }

  &:last-of-type {
    border-bottom: 0;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  color: ${theme.colors.black.a};
  margin-bottom: ${theme.offset(2)};
`;
