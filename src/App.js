import './App.css';
import Dashboard from './components/Dashboard';
import { ThemeProvider } from '@material-ui/styles'
import { theme } from './shared/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
