import React from 'react';

import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from 'chart.js';

import { Line, Doughnut } from 'react-chartjs-2';

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);

export const LineChart = () => {
  const complains = [65, 59, 80, 81, 56, 55, 40,87,32,87,11,36]
  const solve = [55, 49, 40, 21, 60, 45, 30,30,74,30,80,20,35]
  const labels = getLastYearMonths();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Monthly Crimes',
      },
    },
  };
  const data = {
    labels,
    datasets: [{
      label: 'Crime' ,
      data: complains ,
      backgroundColor: '#6b46c1'
    },
      {
        label: 'Solve',
        data: solve,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235)',
      },
      // {
      //   label: 'Dataset 2',
      //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      //   borderColor: 'rgb(53, 162, 235)',
      //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
      // },
    ],
    
  };

  return <Line  options={options} data={data} />;
};

export const DoughnutChart = ({users=[60,40]}) => {
   
  const data = {
    labels: ['Solved Cases', 'Unsolved Cases'],
    datasets: [
      {
        label: 'Case',
        data : users,
        borderColor: ['rgba(62,12,171)', 'rgba(214,43,129,0.3)'],
        backgroundColor: ['rgba(62,12,171,0.3)', 'rgba(214,43,129,0.3)'],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
};

export const getLastYearMonths=()=> {

  const labels = [];

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const currentMonth = new Date().getMonth();

  const remain = 11 - currentMonth;

  for (let i = currentMonth; i < months.length; i--) {
    const element = months[i];
    labels.unshift(element);
    if (i === 0) break;
  }



  for (let i = 11; i > remain ; i--){
    if (i === currentMonth) break;
    const element = months[i];
    labels.unshift(element);
  }

  return labels;
  
}

