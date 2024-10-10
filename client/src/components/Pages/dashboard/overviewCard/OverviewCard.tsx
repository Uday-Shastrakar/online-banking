import React from 'react';
import { Paper, Typography } from '@mui/material';
import './OverviewCard.css';

interface OverviewCardProps {
  title: string;
  value: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({ title, value }) => {
  return (
    <Paper className="overview-card">
      <Typography className="overview-title" variant="h6">
        {title}
      </Typography>
      <Typography className="overview-value" variant="h4">
        {value}
      </Typography>
    </Paper>
  );
};

export default OverviewCard;
