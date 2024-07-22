/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';
import TanstackProvider from './lib/TanstackProvider';
import { SnackbarProvider } from './lib/SnackbarContext';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
    <ThemeProvider>
      <TanstackProvider>
        <SnackbarProvider>
          <Router />
        </SnackbarProvider>
      </TanstackProvider>
    </ThemeProvider>
  );
}
