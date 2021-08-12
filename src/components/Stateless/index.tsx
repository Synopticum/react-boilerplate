import React from 'react';
import { StyledStateless } from './parts';

const Stateless: React.FC = ({ children }) => {
  return <StyledStateless type="button">{children}</StyledStateless>;
};

export default Stateless;
