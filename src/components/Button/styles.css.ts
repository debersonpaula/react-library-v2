import { createTheme, style } from '@vanilla-extract/css';

export const [classTheme, theme] = createTheme({
  primary: {
    main: '#263238',
    light: '#4f5b62',
    dark: '#000a12',
    contrastText: '#ffffff',
  },
});

export const buttonStyle = style({
  backgroundColor: theme.primary.main,
  border: 'none',
  color: theme.primary.contrastText,
  padding: '10px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: 16,
});
