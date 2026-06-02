import type { BarChartData, LineChartData, PieChartData } from '@/types/chart.types';

export const skillProgressData: BarChartData = {
  x: ['React', 'TypeScript', 'Tailwind', 'Next.js', 'Node.js'],
  y: [85, 90, 95, 70, 60],
  type: 'bar',
  marker: { color: '#3b82f6' },
};

export const weeklyHoursData: LineChartData = {
  x: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  y: [2, 4, 3, 5, 6, 8, 4],
  type: 'scatter',
  mode: 'lines+markers',
  line: { color: '#10b981' },
};

export const packageCategoryData: PieChartData = {
  values: [40, 30, 20, 10],
  labels: ['UI/UX', 'State Management', 'Data Fetching', 'Utilities'],
  type: 'pie',
  marker: { colors: ['#8b5cf6', '#f59e0b', '#ef4444', '#6366f1'] },
};