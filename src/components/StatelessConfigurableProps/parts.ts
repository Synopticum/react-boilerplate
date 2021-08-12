import styled from 'styled-components';
import theme from 'src/features/App/GlobalStyle/theme';
import { StyledStatelessWithEventHandler } from 'src/components/StatelessWithEventHandler/parts';

export const StyledStatelessConfigurableProps = styled(StyledStatelessWithEventHandler)<{
  color: string;
  borderRadius: number;
}>`
  background-color: ${theme.colors.white.a};
  color: ${({ color }): string => color};
  border-color: ${({ color }): string => color};
  border-radius: ${({ borderRadius }): string => `${borderRadius}px`};

  &:hover {
    color: ${theme.colors.white.a};
    background-color: ${({ color }): string => color};
  }
`;
