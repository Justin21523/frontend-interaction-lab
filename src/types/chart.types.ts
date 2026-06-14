import type * as Plotly from 'plotly.js';

export type BarChartData = Plotly.Data & {
  x: string[];
  y: number[];
  type: 'bar';
  marker: { color: string };
};

export type LineChartData = Plotly.Data & {
  x: string[];
  y: number[];
  type: 'scatter';
  mode: 'lines+markers';
  line: { color: string };
};

export type PieChartData = Plotly.Data & {
  values: number[];
  labels: string[];
  type: 'pie';
  marker: { colors: string[] };
};
