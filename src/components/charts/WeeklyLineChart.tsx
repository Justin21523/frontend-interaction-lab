import Plot from 'react-plotly.js';
import type { LineChartData } from '@/types/chart.types';

interface WeeklyLineChartProps {
  data: LineChartData;
}

export default function WeeklyLineChart({ data }: WeeklyLineChartProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
      <h3 className="text-lg font-semibold text-slate-800 mb-2">Weekly Learning Hours</h3>
      <Plot
        data={[data]}
        layout={{
          autosize: true,
          height: 300,
          margin: { t: 20, b: 40, l: 40, r: 20 },
          paper_bgcolor: 'transparent',
          plot_bgcolor: 'transparent',
        }}
        config={{ displayModeBar: false, responsive: true }}
        className="w-full"
        useResizeHandler
      />
    </div>
  );
}
