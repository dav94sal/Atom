import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
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
    }]
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
