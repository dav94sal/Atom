import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import LoginForm from './components/LoginForm/';
import Navigation from './components/Navigation'

function Layout() {
  return (
    <>
      <nav>
        <Navigation />
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element: <LoginForm />
    }
  ]
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
