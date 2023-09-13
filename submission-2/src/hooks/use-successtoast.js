import { useToast } from '@chakra-ui/react';

export function useSuccessToast() {
  const toast = useToast();

  return (title, description) => {
    toast({
      title,
      description,
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };
}
