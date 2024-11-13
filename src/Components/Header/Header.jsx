import React from 'react';
import { HeaderPaginaCpe, StyledHeader, Logo } from './HeaderStyles.js'; 

export function HeaderComponent() {
    return (
      <HeaderPaginaCpe>
        <Logo src="src/assets/logo.png" alt="Logo" />
        <StyledHeader/>

      </HeaderPaginaCpe>
    );
  }

  export default HeaderComponent;

