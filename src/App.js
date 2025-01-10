import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/login';
import Home from './pages/home';
//import MyCarousel from './MyCarousel'
import Users from "./User";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path ="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/User" />} />
        </Routes>
      </BrowserRouter>
      <h1>My React Carousel</h1>
      {/* <MyCarousel /> */}
      <Users />

    </div>
  )


}
export default App;



