import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material'; // Make sure to import Container here
import Sidebar from '../sidebar/Sidebar';
import OverviewCard from '../overviewCard/OverviewCard';
import RecentTransactions from '../recent-transaction/RecentTransactions';
import SpendingChart from '../spendingchart/SpendingChart';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <Box display="flex" mt="30px">
      <Sidebar />
      <Box component="main" flexGrow={1} p={3}>
        <Container>
          <Typography variant="h4" gutterBottom>
            Dashboard
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <OverviewCard title="Total Balance" value="₹5,432.10" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <OverviewCard title="Total Transactions" value="128" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <OverviewCard title="Pending Requests" value="3" />
            </Grid>
          </Grid>
          <Box mt={4}>
            <Typography variant="h6" gutterBottom>
              Recent Transactions
            </Typography>
            <RecentTransactions />
          </Box>
          <Box mt={4}>
            <Typography variant="h6" gutterBottom>
              Spending Analysis
            </Typography>
            <SpendingChart />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
