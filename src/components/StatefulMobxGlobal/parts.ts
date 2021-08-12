import styled from 'styled-components';
import theme from 'src/features/App/GlobalStyle/theme';

export const StyledStatefulMobxGlobal = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.offset(2)};
`;
