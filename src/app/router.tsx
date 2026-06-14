import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '@/components/layout/AppLayout';
import { LazyDashboardPage, LazyFormLabPage, LazyHomePage, LazyMotionLabPage } from './LazyPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <LazyHomePage /> },
      { path: 'motion-lab', element: <LazyMotionLabPage /> },
      { path: 'dashboard', element: <LazyDashboardPage /> },
      { path: 'form-lab', element: <LazyFormLabPage /> },
    ],
  },
]);
