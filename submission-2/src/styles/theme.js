import { extendTheme } from '@chakra-ui/react';

const lightColors = {
  bg: '#0f0e17',
  headline: '#fffffe',
  paragraph: '#a7a9be',
};

const darkColors = {
  bg: '#fffffe',
  headline: '#0f0e17',
  paragraph: '#a7a9be',
};

const generateTheme = (colors) => {
  return {
    initialColorMode: 'light',
    styles: {
      global: {
        'html, body': {
          bgColor: colors.bg,
        },
        'h1, h2, h3, h4, h5, h6, label': {
          color: colors.headline,
        },
        'p, li, a, input, textarea, select': {
          color: colors.paragraph,
        },
      },
    },
    fonts: {
      heading: 'sans-serif',
      body: 'sans-serif',
    },
    colors,
  };
};

const lightTheme = extendTheme(generateTheme(lightColors));
const darkTheme = extendTheme(generateTheme(darkColors));

export { lightTheme, darkTheme };
