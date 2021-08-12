import styled from 'styled-components';
import theme from 'src/features/App/GlobalStyle/theme';
import { StyledStateless } from 'src/components/Stateless/parts';

export const StyledStatelessWithEventHandler = styled(StyledStateless)`
  background-color: ${theme.colors.white.a};
  color: ${theme.colors.blue.a};
  border-color: ${theme.colors.blue.a};

  &:hover {
    color: ${theme.colors.white.a};
    background-color: ${theme.colors.blue.a};
  }
`;
