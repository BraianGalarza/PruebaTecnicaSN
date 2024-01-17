import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/login.jsx";
import Register from "./components/register.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import Tramites from "./components/tramites.jsx";
import CheckLogin from "./components/checkLogin.jsx";

function App() {



  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path="/registrar" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />}/>
          <Route path="/tramites" element={<CheckLogin><Tramites /></CheckLogin>} />
          <Route path="/usuario" element={<CheckLogin><Tramites /></CheckLogin>} />
        </Routes>
      </RootLayout>
    </Router>
  );
}

export default App;