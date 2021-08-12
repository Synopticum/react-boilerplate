import React from 'react';
import { RouteComponentProps } from '@reach/router';
import Content from 'src/features/App/Layout/Content';
import { Fallback, Message } from 'src/features/App/Layout/ContentFallback';

const Error404: React.FC<RouteComponentProps> = () => {
  return (
    <Content>
      <div>
        <Fallback>
          <Message>Not found</Message>
        </Fallback>
      </div>
    </Content>
  );
};

export default Error404;
