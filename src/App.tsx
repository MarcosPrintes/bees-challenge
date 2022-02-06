import { ThemeProvider } from '@/theme/ThemeProvider';

import { Login } from '@/pages/Login';

function App() {
  return (
    <ThemeProvider>
      <Login />
    </ThemeProvider>
  );
}

export default App;
