import styled from 'styled-components';
import theme from 'src/features/App/GlobalStyle/theme';

export const StyledStateless = styled.button`
  cursor: pointer;
  border: 1px solid ${theme.colors.red.a};
  background-color: ${theme.colors.white.a};
  color: ${theme.colors.red.a};
  font-size: 16px;
  border-radius: 10px;
  padding: ${theme.offset(1)} ${theme.offset(2)};
  transition: 0.1s background-color;

  &:hover {
    color: ${theme.colors.white.a};
    background-color: ${theme.colors.red.a};
  }
`;
