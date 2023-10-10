//import logo from './logo.svg';
import './App.css';
import Firstindex from './pages/Common-page/Firstindex/Firstindex';
import Aboutpage from './pages/Common-page/Aboutpage/Aboutpage';
//import Login from './pages/Common-page/Loginpage/Login';
import Signup from './pages/Common-page/Signuppage/Signup';
import { Routes,Route } from 'react-router-dom';

function App() {
return(
  <Routes>
<Route path="/" element={<Firstindex/>}>
          <Route index element={<Aboutpage/>} />
          
          <Route path="register" element={<Signup />} />
</Route>
<Route path="/dashboard" element={<Firstindex/>}>
          <Route index element={<Aboutpage/>} />
          
          <Route path="register" element={<Signup />} />
</Route>









    
</Routes>
);
}

export default App;
