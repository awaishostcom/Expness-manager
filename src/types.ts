import { Timestamp } from 'firebase/firestore';

export interface UserProfile {
  uid: string;
  name: string;
  email: string;
  createdAt: Timestamp;
}

export interface BankAccount {
  id: string;
  name: string;
  number?: string;
  balance: number;
  bankName: string;
  type: 'checking' | 'savings' | 'credit' | 'other';
}

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: Timestamp;
  accountId: string;
  type: 'income' | 'expense';
  notes?: string;
}

export interface Bill {
  id: string;
  title: string;
  amount: number;
  dueDate: Timestamp;
  status: 'paid' | 'unpaid';
  recurring: boolean;
}

export interface Budget {
  id: string;
  category: string;
  limit: number;
  period: 'monthly';
}
