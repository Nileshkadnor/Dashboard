import React from 'react';
import CircularGraph from './CircularGraph';

const ExampleWidget = ({ onRemove }) => {
    const data = [2, 2]; // Example data values
    const labels = ['Connected', 'Not Connected'];
    const colors = ['#4e79a7', '#f28e2c']; // Colors for each section of the graph

    return (
        <div className="widget">
            <button className="remove-button" onClick={onRemove}>
                &#10005; {/* Cross icon */}
            </button>
            <h3>Cloud Accounts</h3>
            <CircularGraph data={data} labels={labels} colors={colors} />
            <p>Total: 4</p>
        </div>
    );
};

export default ExampleWidget;
