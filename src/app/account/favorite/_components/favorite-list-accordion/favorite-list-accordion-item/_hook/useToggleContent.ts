import { useState } from 'react';

export function useToggleContent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleContent = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, handleToggleContent };
}
