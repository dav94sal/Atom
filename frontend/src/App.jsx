import { useEffect, useState } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { restoreUser } from './store/session';
import Home from './components/Home';
import LoginForm from './components/LoginForm/';
import Navigation from './components/Navigation'

function Layout() {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(restoreUser())
      .then(() => setIsLoaded(true))
  },[dispatch])

  return (
    <>
      <nav>
        <Navigation />
      </nav>
      <main>
        {isLoaded && <Outlet />}
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
