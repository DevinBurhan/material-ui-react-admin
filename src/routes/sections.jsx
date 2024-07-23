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
    //Auth Routes define here
    {
      path: 'login',
      element: (
        <ProtectedRoute>
          <LoginPage />
        </ProtectedRoute>
      ),
    },
    //dahsbord Routes here
    {
      path: '/',
      element: (
        <PrivateRoute>
          <DashboardLayout>
            <Suspense>
              <IndexPage />
            </Suspense>
          </DashboardLayout>
        </PrivateRoute>
      ),
      // children: [
      //   { paht: '/', element: <IndexPage />, index: true },
      //   { paht: '/management/users', element: <IndexPage /> },
      //   { paht: '/management/reports/daily', element: <IndexPage /> },
      //   { paht: '/management/reports/monthly', element: <IndexPage /> },
      //   { path: '*', element: <Navigate to="/404" replace /> },
      //   {
      //     path: '404',
      //     element: <Page404 />,
      //   },
      // ],
    },
    {
      path: '/management/users',
      element: (
        <DashboardLayout>
          <PrivateRoute>
            <IndexPage />
          </PrivateRoute>
        </DashboardLayout>
      ),
    },
    {
      path: '/management/reports/daily',
      element: (
        <DashboardLayout>
          <PrivateRoute>
            <IndexPage />
          </PrivateRoute>
        </DashboardLayout>
      ),
    },
    {
      path: '/management/reports/monthly',
      element: (
        <DashboardLayout>
          <PrivateRoute>
            <IndexPage />
          </PrivateRoute>
        </DashboardLayout>
      ),
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
    {
      path: '404',
      element: (
        <DashboardLayout>
          <Page404 />
        </DashboardLayout>
      ),
    },
  ]);

  return routes;
}
