import Plot from 'react-plotly.js';
import type { BarChartData } from '@/types/chart.types';

interface SkillBarChartProps {
  data: BarChartData;
}

export default function SkillBarChart({ data }: SkillBarChartProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 h-full flex flex-col">
      <h3 className="text-lg font-semibold text-slate-800 mb-2">Skill Progress (%)</h3>
      <div className="flex-1 flex items-center justify-center">
        <Plot
          data={[data]}
          layout={{
            autosize: true,
            height: 280,
            margin: { t: 20, b: 40, l: 40, r: 20 },
            paper_bgcolor: 'transparent',
            plot_bgcolor: 'transparent',
          }}
          config={{ displayModeBar: false, responsive: true }}
          className="w-full"
          useResizeHandler
        />
      </div>
    </div>
  );
}
