/* eslint-disable quotes */
import {
  extendTheme,
} from '@chakra-ui/react';

const colors = {
  dark: '#0f0e17',
  headline: '#fffffe',
  paragraph: '#a7a9be',
};

const styles = {
  global: {
    'html, body': {
      bgColor: colors.dark,
    },
    'h1, h2, h3, h4, h5, h6, label': {
      color: colors.headline,
    },
    'p, li, a, input, textarea': {
      color: colors.paragraph,
    },
  },
};

const theme = extendTheme({
  styles,
  fonts: {
    heading: 'sans-serif',
    body: 'sans-serif',
  },
});

export default theme;