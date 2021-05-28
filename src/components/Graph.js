import React from 'react';
import { Line } from 'react-chartjs-2';

export const Graph = ({entries}) => {
	// https://www.chartjs.org/docs/latest/samples/line/segments.html
	const labels = [...Array(entries.length + 1).keys()].slice(1);
	const data = {
		labels,
		datasets: [
			{
				label: 'Mood data',
				data: entries,
				fill: false,
				backgroundColor: 'rgb(255, 99, 132)',
      			borderColor: 'rgba(255, 99, 132, 0.2)',
			}
		]
	};

	const options = {
	  scales: {
	    yAxes: [
	      {
	        ticks: {
	          beginAtZero: true,
	        },
	      },
	    ],
	  },
	};

	console.log(entries);

	return <Line data={data} options={options} />
};