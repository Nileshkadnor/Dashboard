


import React from 'react';
import CircularGraph from './CircularGraph';

const Widget = ({ widget, onRemove }) => {
    const data = [2, 2]; 
    const labels = ['Connected', 'Not Connected'];
    const colors = ['#4e79a7', '#f28e2c']; 

    return (
        <div className="widget">
            <button className="remove-button" onClick={() => onRemove(widget.id)}>
                &#10005; {/* Cross icon */}
            </button>
            <h3>{widget.name}</h3>
            <CircularGraph data={data} labels={labels} colors={colors} />
            <p>{widget.content}</p>
        </div>
    );
};

export default Widget;
