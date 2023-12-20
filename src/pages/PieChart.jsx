
import React, { useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css';

Chart.register(...registerables);

const PieChart = () => {
  useEffect(() => {
    const data = {
      labels: ['Blind', 'Deaf', 'Dump'],
      datasets: [{
        data: [55, 30, 15],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
        ],
        borderWidth: 1,
      }],
    };

    const config = {
      type: 'pie',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Number of Blind, Deaf, Dump',
          },
        },
      },
    };

    const canvasRef = document.getElementById('myPieChart');
    const myChart = new Chart(canvasRef, config);

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className='mt-5' style={{ width: '100%', maxWidth: '400px' }}>
      <canvas id="myPieChart"></canvas>
    </div>
  );
};

export default PieChart;
