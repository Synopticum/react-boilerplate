import styled from 'styled-components';
import React from 'react';
import Content from 'src/features/App/Layout/Content';
import theme from 'src/features/App/GlobalStyle/theme';

export const Fallback = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.white.a};
`;

export const Image = styled.img`
  width: 328px;
  height: 272px;
  margin-left: -40px;
`;

export const Message = styled.div`
  text-align: center;
  line-height: 1.4;
`;

const ContentFallback: React.FC = () => {
  return (
    <Content>
      <div>
        <Fallback>
          <Message>Unknown error</Message>
        </Fallback>
      </div>
    </Content>
  );
};

export default ContentFallback;
