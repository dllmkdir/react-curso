import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Routes from './Routes'
import CssBaseline from '@material-ui/core/CssBaseline';
function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <div className="App">
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
