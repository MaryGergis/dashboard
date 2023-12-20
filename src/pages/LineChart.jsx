import React, { useEffect, useState } from 'react';
import { getRevenue } from '../API';
import { Card } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function LineChart() {
  const [revenueData, setRevenueData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getRevenue().then((res) => {
      const labels = res.carts.map((cart) => `User-${cart.userId}`);
      const data = res.carts.map((cart) => cart.discountedTotal);

      const dataSource = {
        labels,
        datasets: [
          {
            label: 'Calls',
            data,
            fill: false,
            borderColor: 'rgba(255, 0, 0, 1)',
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
            pointBackgroundColor: 'rgba(255, 0, 0, 1)',
            pointBorderColor: 'rgba(255, 0, 0, 1)',
            pointHoverBackgroundColor: 'rgba(255, 0, 0, 1)',
            pointHoverBorderColor: 'rgba(255, 0, 0, 1)',
          },
        ],
      };

      setRevenueData(dataSource);
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'User Calls',
      },
    },
  };

  return (
    <Card className='mt-5' >
      <Card.Body>
        <Card.Title>User Calls</Card.Title>
        <Line data={revenueData} options={options} />
      </Card.Body>
    </Card>
  );
}

export default LineChart;