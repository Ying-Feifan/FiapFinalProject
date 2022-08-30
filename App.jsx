import { Login } from './src/screens/navigation/main/login';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <Login />

    </PaperProvider>
  );
}

