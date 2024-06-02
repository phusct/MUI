import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NavigationBar from './NavigationBar';
import DataTable from './DataTable';
import DialogBox from './DialogBox';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavigationBar />
      <div style={{ padding: 16 }}>
        <DataTable />
        <DialogBox />
      </div>
    </ThemeProvider>
  );
}

export default App;
