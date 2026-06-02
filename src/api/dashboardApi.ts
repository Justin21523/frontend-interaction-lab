import type { BarChartData, LineChartData, PieChartData } from '@/types/chart.types';
import { skillProgressData, weeklyHoursData, packageCategoryData } from '@/data/chartData';

export interface DashboardData {
  skills: BarChartData;
  weeklyHours: LineChartData;
  packages: PieChartData;
}

// Simulate network delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Mock API to fetch dashboard data.
 * Includes a 10% chance of random failure to demonstrate error handling.
 */
export async function fetchDashboardData(): Promise<DashboardData> {
  await delay(1500);
  
  if (Math.random() < 0.1) {
    throw new Error('Network error: Failed to fetch dashboard data');
  }

  return {
    skills: skillProgressData,
    weeklyHours: weeklyHoursData,
    packages: packageCategoryData,
  };
}