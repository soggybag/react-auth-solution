import './App.css';
import Login from './Login';
import Content from './Content';
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute';
import Home from './Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/login" element={<Login />} />
        <Route path="/content" element={
          <PrivateRoute>
            <Content />
          </PrivateRoute>
        } />
      </Route>
    </Routes>
  );
}

export default App;
