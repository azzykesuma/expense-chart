import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
);
export const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true,
        yAlign: 'bottom',
        displayColors: false,
        caretSize: 0
      }
    },
    scales: {
        y: {
            display: false, // Set this to false to hide the x-axis
        },
        x: {
            grid : {
                 display : false
            }
            // display: false, // Set this to false to hide the x-axis
        }
    }
};

const data = require('../data/data.json');

export const chartData = {
    labels: data.map((item) => item.day),
    datasets: [
        {
            label: 'Spending',
            data: data.map((item) => item.amount),
            backgroundColor: 'hsl(10, 79%, 65%)',
            borderColor: 'hsl(10, 79%, 65%)',
            borderRadius: 5,
            hoverBackgroundColor: 'hsl(186, 34%, 60%)',
        },
    ],
}

const MainChart = () => {
    return (
        <div className='bg-white mt-5 p-5 rounded-lg max-w-lg w-full'>
            <h1 className='font-bold font text-lg mb-4'>Spending - Last 7 days</h1>
           <Bar options={options} data={chartData} />
           <hr className='my-5' />
           <div>
            <p className='text-medium-brown text-sm'>Total this month</p>
            <div className='flex justify-between items-center'>
                <h3 className='font-bold text-2xl'>$478.33</h3>
                <div>
                    <p className='text-sm'>+2.4%</p>
                    <p className='text-medium-brown text-sm'>from last month</p>
                </div>
            </div>
           </div>
        </div>
    );
};

export default MainChart;