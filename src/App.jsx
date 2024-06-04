import Principal from "./components/layouts/Home/Principal"
import Login from "./components/layouts/Login/Login"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Liquidacion from "./components/layouts/Nomina/Liquidacion"
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import ListadoUsuario from "./components/layouts/Listado/ListadoUsuario";
import Registro from "./components/layouts/Login/Registro";

const router = createBrowserRouter([
  {
    path:'/login',
    element: <Login />
  },
  {
    path:'/'  ,
    element: <Principal />
  },

  {
    path:'/nomina',
    element: <Liquidacion />
  },
  {
    path:'/usuarios',
    element: <ListadoUsuario />
  },
  {
    path:'/registro',
    element: <Registro />
  },


])

function App() {
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App