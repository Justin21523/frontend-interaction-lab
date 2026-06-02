import SlideUp from '@/components/motion/SlideUp';
import SkillBarChart from '@/components/charts/SkillBarChart';
import WeeklyLineChart from '@/components/charts/WeeklyLineChart';
import PackagePieChart from '@/components/charts/PackagePieChart';
import { useDashboardData } from './hooks/useDashboardData';
import { Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  const { data, isLoading, isError, error, refetch } = useDashboardData();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-4">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        <p className="text-slate-600">Fetching dashboard data via TanStack Query...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-4 text-red-600">
        <AlertCircle className="h-8 w-8" />
        <p className="font-semibold">Error: {error.message}</p>
        <Button onClick={() => refetch()} variant="outline">
          Retry Fetch
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <SlideUp>
        <h1 className="text-3xl font-bold text-slate-800 border-b pb-4">Data Dashboard</h1>
        <p className="text-slate-600 mt-2">Data is cached and managed by TanStack Query.</p>
      </SlideUp>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <SlideUp delay={0.1}><SkillBarChart data={data!.skills} /></SlideUp>
        <SlideUp delay={0.2}><WeeklyLineChart data={data!.weeklyHours} /></SlideUp>
        <SlideUp delay={0.3}><PackagePieChart data={data!.packages} /></SlideUp>
      </div>
    </div>
  );
}