import React from 'react';
import { observer } from 'mobx-react-lite';
import { StyledHeader } from './parts';
import { globalStore } from 'src/stores/GlobalStore';

const Header: React.FC = observer(() => {
  return <StyledHeader>{globalStore.headerText}</StyledHeader>;
});

export default Header;
