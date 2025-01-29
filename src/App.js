// App.js
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/login';
import Home from './pages/home';
// import MyCarousel from './MyCarousel';
import Users from './User';

function App() {
  const isAuthenticated = localStorage.getItem('isAuthenticated'); // Check authentication status

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to={isAuthenticated ? '/users' : '/login'} />} />
          <Route path="/users" element={isAuthenticated ? <Users /> : <Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
      {/* <MyCarousel /> */}
    </div>
  );
}

export default App;
