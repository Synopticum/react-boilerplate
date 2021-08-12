import React from 'react';
import { StyledStatelessConfigurableProps } from './parts';

type Props = {
  onClick: React.MouseEventHandler;
  color: string;
  borderRadius: number;
};

const StatelessConfigurableProps: React.FC<Props> = ({ children, onClick, color, borderRadius }) => {
  return (
    <StyledStatelessConfigurableProps onClick={onClick} color={color} borderRadius={borderRadius}>
      {children}
    </StyledStatelessConfigurableProps>
  );
};

export default StatelessConfigurableProps;
