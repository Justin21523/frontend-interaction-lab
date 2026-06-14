import { lazy, Suspense, type ReactNode } from 'react';

const HomePage = lazy(() => import('@/features/home/HomePage'));
const MotionLabPage = lazy(() => import('@/features/motion-lab/MotionLabPage'));
const DashboardPage = lazy(() => import('@/features/dashboard/DashboardPage'));
const FormLabPage = lazy(() => import('@/features/form-lab/FormLabPage'));

function PageSuspense({ children }: { children: ReactNode }) {
  return (
    <Suspense
      fallback={
        <div className="flex h-64 items-center justify-center text-sm font-medium text-slate-500">
          Loading...
        </div>
      }
    >
      {children}
    </Suspense>
  );
}

export function LazyHomePage() {
  return (
    <PageSuspense>
      <HomePage />
    </PageSuspense>
  );
}

export function LazyMotionLabPage() {
  return (
    <PageSuspense>
      <MotionLabPage />
    </PageSuspense>
  );
}

export function LazyDashboardPage() {
  return (
    <PageSuspense>
      <DashboardPage />
    </PageSuspense>
  );
}

export function LazyFormLabPage() {
  return (
    <PageSuspense>
      <FormLabPage />
    </PageSuspense>
  );
}
