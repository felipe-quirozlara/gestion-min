import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavbarPage from './components/NavbarPage';
import Login from './pages/Login';
import Landing from './pages/Landing';
import Signin from './pages/Signin';
import RecuperClave from './pages/RecuperClave';
import PrivatePages from './components/PrivatePages';
import DashboardOperario from './pages/DashboardOperario';
import DashboardAdmin from './pages/admin/DashboardAdmin';

import CursosOperario from './pages/CursosOperario';
import CursoPage from './pages/CursoPage';
import CambiarInfo from './pages/CambiarInfo';
import AdminPages from './components/AdminPages';
import Cursos from './pages/admin/Cursos';
import UsuariosPage from './pages/admin/UsuariosPage';
import ReportesPage from './pages/admin/ReportesPage';
import NotFound from './pages/NotFound';
import CrearCurso from './pages/admin/CrearCurso';
import EditarCurso from './pages/admin/EditarCurso';
import ProfePages from './components/ProfePages';
import DashboardProfe from './pages/profesores/DashboardProfe';
import CreateAdmin from './pages/admin/CreateAdmin';
import CrearProfe from './pages/admin/CrearProfe';
import CrearUser from './pages/admin/CrearUser';
import CursosProfe from './pages/profesores/CursosProfe';
import Evaluacion from './pages/Evaluacion';

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavbarPage />}>
        <Route path='' element={<Landing />} />
        <Route path='login' element={<Login />} />
        <Route path='singin' element={<Signin />} />
        <Route path='recuper-clave' element={<RecuperClave />} />
      </Route>
      <Route path='/users' element={<PrivatePages />}>
        <Route path='' element={<DashboardOperario />} />
        <Route path='cursos' element={<CursosOperario />} />
        <Route path='cambiar-info' element={<CambiarInfo />} />
        <Route path='evaluacion' element={<Evaluacion />} />

        <Route path='curso' element={<CursoPage />} />

      </Route>
      <Route path='/admin' element={<AdminPages />}>
        <Route path='' element={<DashboardAdmin />} />
        <Route path='cursos' element={<Cursos />} />
        <Route path='curso' element={<CursoPage />} />
        <Route path='usuarios' element={<UsuariosPage />}  />
        <Route path='reportes' element={<ReportesPage />}/>

        <Route path='crear-curso' element={<CrearCurso />} />
        <Route path='editar-curso' element={<EditarCurso />} />
        <Route path='crear-admin' element={<CreateAdmin />} />
        <Route path='crear-profe' element={<CrearProfe />} />
        <Route path='crear-operario' element={<CrearUser />} />

      </Route>
      <Route path='/profe' element={<ProfePages />}>
        <Route path='' element={<DashboardAdmin />} />
        <Route path='cursos' element={<CursosProfe />} />
        <Route path='editar-curso' element={<EditarCurso />} />
        <Route path='curso' element={<CursoPage />} />

      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
