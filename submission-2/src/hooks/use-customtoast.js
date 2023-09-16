import { useToast } from '@chakra-ui/react';

export function useCustomToast() {
  const toast = useToast();

  const showToast = (title, description, status) => {
    toast({
      title,
      description,
      status,
      duration: 5000,
      isClosable: true,
    });
  };

  const successToast = (title, description) => {
    showToast(title, description, 'success');
  };

  const errorToast = (title, description) => {
    showToast(title, description, 'error');
  };

  return {
    successToast,
    errorToast,
  };
}
