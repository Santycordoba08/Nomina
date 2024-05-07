import Principal from "./components/layouts/Home/Principal"
import Login from "./components/layouts/Login/Login"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Liquidacion from "./components/layouts/Nomina/Liquidacion"
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

])

function App() {
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

