import styled from 'styled-components';
import theme from 'src/features/App/GlobalStyle/theme';

export const StyledHeader = styled.div`
  background-color: ${theme.colors.black.a};
  color: ${theme.colors.white.a};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.offset(4)};
`;
