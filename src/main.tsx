import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import App from './App.tsx';
import { queryClient } from './lib/queryClient.ts';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      {/* Sonner Toaster for global notifications */}
      <Toaster richColors position="top-right" />
    </QueryClientProvider>
  </React.StrictMode>
);