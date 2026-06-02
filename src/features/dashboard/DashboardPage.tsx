import SlideUp from '@/components/motion/SlideUp';
import SkillBarChart from '@/components/charts/SkillBarChart';
import WeeklyLineChart from '@/components/charts/WeeklyLineChart';
import PackagePieChart from '@/components/charts/PackagePieChart';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <SlideUp>
        <h1 className="text-3xl font-bold text-slate-800 border-b pb-4">Data Dashboard</h1>
      </SlideUp>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <SlideUp delay={0.1}><SkillBarChart /></SlideUp>
        <SlideUp delay={0.2}><WeeklyLineChart /></SlideUp>
        <SlideUp delay={0.3}><PackagePieChart /></SlideUp>
      </div>
    </div>
  );
}