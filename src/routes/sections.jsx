import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

import { PrivateRoute, ProtectedRoute } from './RouteGuards';

export const IndexPage = lazy(() => import('src/pages/app'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <PrivateRoute>
          <DashboardLayout>
            <Suspense>
              <Outlet />
            </Suspense>
          </DashboardLayout>
        </PrivateRoute>
      ),
      children: [
        { paht: '/', element: <IndexPage />, index: true },
        { path: '*', element: <Navigate to="/404" replace /> },
        {
          path: '404',
          element: <Page404 />,
        },
      ],
    },
    {
      path: 'login',
      element: (
        <ProtectedRoute>
          <LoginPage />
        </ProtectedRoute>
      ),
    },
  ]);

  return routes;
}
