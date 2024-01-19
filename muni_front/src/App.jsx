import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/login.jsx";
import Register from "./components/register.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import Tramites from "./components/tramites.jsx";
import CheckLogin from "./components/checkLogin.jsx";
import UserTramites from "./components/userTramites.jsx";
import FormTramite from "./components/formTramite.jsx";
import CheckAdmin from "./components/checkAdmin.jsx";
import AdminTramites from "./components/adminTramites.jsx";
import UserFormData from "./components/userFormData.jsx";

function App() {

  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path="/registrar" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />}/>
          <Route path="/usuario/tramites" element={<CheckLogin><UserTramites /></CheckLogin>} />
          <Route path="/usuario" element={<CheckLogin><UserFormData /></CheckLogin>} />
          <Route path="/tramites" element={<CheckLogin><Tramites /></CheckLogin>} />
          <Route path="/tramites/renovar-carnet-de-conducir" element={<CheckLogin><FormTramite /></CheckLogin>} />
          <Route path="/admin" element={<CheckLogin><CheckAdmin><AdminTramites /></CheckAdmin></CheckLogin>} />
        </Routes>
      </RootLayout>
    </Router>
  );
}

export default App;