import { createTheme } from '@material-ui/core/styles';

const theme1 = createTheme({
  palette: {
    primary: {
      main: '#008080', // Teal color
    },
    secondary: {
      main: '#ff5733', // Secondary color
    },
    // Add more colors if needed
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Default font
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#333', // Custom color for h1
    },
    // Customize other typography styles as needed
  },
  shape: {
    borderRadius: 8, // Custom border radius
  },
  spacing: 8, // Custom spacing unit
  animation: {
    hover: '0.3s ease-in-out', // Custom animation for hover effects
  },
  // Add more customizations as needed
});

export default theme1;