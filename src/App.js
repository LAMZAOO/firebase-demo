// import './App.css';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Todo from './Components/Todo';
import { AuthProvider } from './Context/authContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';

function App() {
  return (
    <AuthProvider>
      <div style={{ margin: '2em' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
