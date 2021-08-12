import React from 'react';
import { StyledStatelessWithEventHandler } from './parts';

type Props = {
  onClick: React.MouseEventHandler;
};

const StatelessWithEventHandler: React.FC<Props> = ({ children, onClick }) => {
  return (
    <StyledStatelessWithEventHandler type="button" onClick={onClick}>
      {children}
    </StyledStatelessWithEventHandler>
  );
};

export default StatelessWithEventHandler;
