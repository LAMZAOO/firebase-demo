import './App.css';
import SignUp from './Components/SignUp';
import { AuthProvider } from './Context/authContext';

function App() {
  return (
    <AuthProvider>
      <div style={{ margin: '2em' }}>
        <SignUp />
      </div>
    </AuthProvider>
  );
}

export default App;
