import { ThemeProvider } from '@/theme/ThemeProvider';

import { Breweries } from '@/pages/Breweries';

function App() {
  return (
    <ThemeProvider>
      <Breweries />
    </ThemeProvider>
  );
}

export default App;
