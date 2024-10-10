import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import './RecentTransactions.css';

interface Transaction {
  date: string;
  description: string;
  amount: string;
}

const RecentTransactions: React.FC = () => {
  const transactions: Transaction[] = [
    { date: '2024-08-01', description: 'Deposit', amount: '₹500.00' },
    { date: '2024-08-02', description: 'Payment', amount: '-₹50.00' },
    { date: '2024-08-05', description: 'Withdrawal', amount: '-₹200.00' },
  ];

  return (
    <List className="transactions-list">
      {transactions.map((transaction, index) => (
        <ListItem key={index} className="transaction-item">
          <ListItemText primary={`${transaction.date} - ${transaction.description}`} secondary={transaction.amount} />
        </ListItem>
      ))}
    </List>
  );
};

export default RecentTransactions;
