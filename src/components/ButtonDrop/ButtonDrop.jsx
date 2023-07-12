import React, { useState } from 'react';

const ButtonDrop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(isOpen => !isOpen);
  return <button onClick={toggleMenu}>{isMenuOpen ? '˅' : '^'}</button>;
};

export default ButtonDrop;
