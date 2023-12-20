import React, {useEffect, useState} from "react";
import { getRevenue } from "../API";
import { Card } from 'react-bootstrap'; // Import Bootstrap Card
import { Bar } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

function DashboardChart() {
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
              backgroundColor: 'rgba(255, 0, 0, 1)',
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
      <Card className="mt-5" >
        <Card.Body>
          <Card.Title> User Calls</Card.Title>
          <Bar options={options} data={revenueData} />
        </Card.Body>
      </Card>
    );
  }

  export default DashboardChart;