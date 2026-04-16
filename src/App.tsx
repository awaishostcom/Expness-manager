import React, { useState } from 'react';
import { ThemeProvider } from 'next-themes';
import { useAuth } from './contexts/AuthContext';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Accounts } from './pages/Accounts';
import { Expenses } from './pages/Expenses';
import { Income } from './pages/Income';
import { Budgets } from './pages/Budgets';
import { Settings } from './pages/Settings';
import { Ledger } from './pages/Ledger';
import { Wallet } from './pages/Wallet';
import { Staff } from './pages/Staff';
import { Business } from './pages/Business';
import { Bills } from './pages/Bills';
import { AuthPage } from './pages/AuthPage';
import { Toaster } from '../components/ui/sonner';
import { ErrorBoundary } from './components/ErrorBoundary';

export default function App() {
  const { user, loading, isAuthReady } = useAuth();
  const [currentPage, setCurrentPage] = useState<string>('dashboard');

  if (!isAuthReady || loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-12 w-12 bg-primary/20 rounded-full" />
          <div className="h-4 w-32 bg-muted rounded" />
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <AuthPage />
        <Toaster />
      </ThemeProvider>
    );
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard': return <Dashboard />;
      case 'ledger': return <Ledger />;
      case 'wallet': return <Wallet />;
      case 'accounts': return <Accounts />;
      case 'expenses': return <Expenses />;
      case 'income': return <Income />;
      case 'budgets': return <Budgets />;
      case 'bills': return <Bills />;
      case 'staff': return <Staff />;
      case 'business': return <Business />;
      case 'settings': return <Settings />;
      default: return <Dashboard />;
    }
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ErrorBoundary>
        <Layout currentPage={currentPage} onPageChange={setCurrentPage}>
          {renderPage()}
        </Layout>
        <Toaster position="top-right" />
      </ErrorBoundary>
    </ThemeProvider>
  );
}
