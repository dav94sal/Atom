import { useEffect, useState } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { restoreUser } from './store/session';
import Home from './components/Home';
import SignupForm from './components/SignupForm/';
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
      path: "/signup",
      element: <SignupForm />
    },
  ]
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
