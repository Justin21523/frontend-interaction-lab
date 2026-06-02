import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '@/components/layout/AppLayout';
import HomePage from '@/features/home/HomePage';
import MotionLabPage from '@/features/motion-lab/MotionLabPage';
import DashboardPage from '@/features/dashboard/DashboardPage';
import FormLabPage from '@/features/form-lab/FormLabPage'; // New Import

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'motion-lab', element: <MotionLabPage /> },
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'form-lab', element: <FormLabPage /> }, // New Route
    ],
  },
]);