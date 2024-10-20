import { CssBaseline, ThemeProvider } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { customTheme } from './theme/customTheme';
import { Dashboard } from './pages/dashboard';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ComposeContext from './context/Compose.context';
import { rootContext } from './context/root.context';

const queryClient = new QueryClient();

const App: FC = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <ComposeContext components={rootContext}>
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
          <Dashboard />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </ComposeContext>
    </QueryClientProvider>
  );
};

export default App;
