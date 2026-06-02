import { useQuery } from '@tanstack/react-query';
import { fetchDashboardData } from '@/api/dashboardApi';

export const DASHBOARD_QUERY_KEY = ['dashboard-data'];

export function useDashboardData() {
  return useQuery({
    queryKey: DASHBOARD_QUERY_KEY,
    queryFn: fetchDashboardData,
  });
}