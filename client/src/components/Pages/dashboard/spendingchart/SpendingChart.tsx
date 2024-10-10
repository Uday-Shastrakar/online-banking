import React from 'react';
import {Paper, Typography } from '@mui/material';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import './SpendingChart.css';

const data = [
  { name: 'Groceries', value: 200 },
  { name: 'Utilities', value: 100 },
  { name: 'Rent', value: 1200 },
  { name: 'Entertainment', value: 150 },
];

const COLORS = ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56'];

const SpendingChart: React.FC = () => {
  return (
    <Paper className="chart-container">
      <Typography variant="h6" gutterBottom>
        Spending Analysis
      </Typography>
      <PieChart width={500} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </Paper>
  );
};

export default SpendingChart;
