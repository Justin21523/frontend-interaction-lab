import { QueryClient } from '@tanstack/react-query';

/**
 * Global Query Client configuration.
 * Set staleTime to prevent immediate refetching on mount.
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});