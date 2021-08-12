import React from 'react';
import { observer } from 'mobx-react-lite';
import { StyledFooter } from './parts';
import { globalStore } from 'src/stores/GlobalStore';

export const Footer: React.FC = observer(() => {
  return <StyledFooter>{globalStore.footerText}</StyledFooter>;
});

export default Footer;
