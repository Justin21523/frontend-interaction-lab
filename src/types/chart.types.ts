export interface BarChartData {
  x: string[];
  y: number[];
  type: 'bar';
  marker: { color: string };
}

export interface LineChartData {
  x: string[];
  y: number[];
  type: 'scatter';
  mode: 'lines+markers';
  line: { color: string };
}

export interface PieChartData {
  values: number[];
  labels: string[];
  type: 'pie';
  marker: { colors: string[] };
}