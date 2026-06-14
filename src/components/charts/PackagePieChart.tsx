import Plot from 'react-plotly.js';
import type { PieChartData } from '@/types/chart.types';

interface PackagePieChartProps {
  data: PieChartData;
}

export default function PackagePieChart({ data }: PackagePieChartProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
      <h3 className="text-lg font-semibold text-slate-800 mb-2">Package Categories</h3>
      <Plot
        data={[data]}
        layout={{
          autosize: true,
          height: 300,
          margin: { t: 20, b: 20, l: 20, r: 20 },
          paper_bgcolor: 'transparent',
          plot_bgcolor: 'transparent',
          showlegend: true,
        }}
        config={{ displayModeBar: false, responsive: true }}
        className="w-full"
        useResizeHandler
      />
    </div>
  );
}
