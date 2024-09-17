import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.tsx';

import ErrorPage from './pages/Error.tsx';
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import SignUp from './pages/Signup.tsx';
import Board from './pages/Board.tsx';
import User from './pages/User.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, 
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      }, 
      {
        path: '/board',
        element: <Board />
      },
      {
        path: '/user',
        element: <User />
      },
    ]
  }
])

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
