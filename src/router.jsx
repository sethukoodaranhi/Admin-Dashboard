import Login from "./pages/auth/Login";
import Dashboard from "./pages/mainDashboard/Dashboard";
import { Navigate } from 'react-router-dom'
import Settings from "./pages/settings/Settings";
import Users from "./pages/users/Users";
import MainLayout from "./Layout/MainLayout";

const publicRoutes = [
    {
        path: '/',
        element: <Navigate to='/login' />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '*',
        element: <Login />
    }
]

const privateRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="dashboard" /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'users', element: <Users /> },
      { path: 'settings', element: <Settings /> },
    ],
  },
  { path: '*', element: <MainLayout /> },
];


export { privateRoutes, publicRoutes }