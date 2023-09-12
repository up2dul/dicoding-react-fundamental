import { useThemeContext } from '@/contexts/ThemeContext';
import { Button } from '@chakra-ui/react';

export default function ButtonTheme() {
  const { toggleTheme } = useThemeContext();

  return (
    <Button colorScheme='teal' onClick={toggleTheme}>
      Switch theme
    </Button>
  );
}
