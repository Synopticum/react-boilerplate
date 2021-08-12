import styled from 'styled-components';
import theme from 'src/features/App/GlobalStyle/theme';

export const Content = styled.div`
  display: flex;
  flex: 1 1 0;
  height: 100%;

  & > div {
    position: relative;
    flex: 1;
  }
`;

export default Content;
