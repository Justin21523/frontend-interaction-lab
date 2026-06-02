import Plot from 'react-plotly.js';
import { weeklyHoursData } from '@/data/chartData';

export default function WeeklyLineChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
      <h3 className="text-lg font-semibold text-slate-800 mb-2">Weekly Learning Hours</h3>
      <Plot
        data={[weeklyHoursData]}
        layout={{ width: 400, height: 300, margin: { t: 20, b: 40, l: 40, r: 20 } }}
        config={{ displayModeBar: false }}
      />
    </div>
  );
}