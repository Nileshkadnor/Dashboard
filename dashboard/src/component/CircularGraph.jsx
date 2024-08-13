

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

const CircularGraph = ({ data, labels, colors, onRemove }) => {
    const chartData = {
        labels: labels,
        datasets: [
            {
                data: data,
                backgroundColor: colors,
                borderWidth: 2,
            },
        ],
    };

    const options = {
        cutout: '70%', 
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
        },
    };

    return (
        <div className="circular-graph-container" style={{ position: 'relative' }}>
            <Doughnut data={chartData} options={options} />

        </div>
    );
};

export default CircularGraph;
