import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.date),
    datasets: [
      {
        label: 'Number of Views',
        data: data.map(item => item.views),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default Chart;
