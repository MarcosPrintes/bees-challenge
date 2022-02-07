import { ThemeProvider } from '@/theme/ThemeProvider';

// import { Login } from '@/pages/Login';
import { Breweries } from '@/pages/Breweries';

function App() {
  return (
    <ThemeProvider>
      <Breweries />
    </ThemeProvider>
  );
}

export default App;
