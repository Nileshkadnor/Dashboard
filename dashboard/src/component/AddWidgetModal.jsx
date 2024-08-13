import React, { useState } from 'react';

const AddWidgetModal = ({ categoryId, addWidget, onClose }) => {
    const [widgetName, setWidgetName] = useState('');
    const [widgetContent, setWidgetContent] = useState('');

    const handleAddWidget = () => {
        const newWidget = {
            id: Date.now().toString(),
            name: widgetName,
            content: widgetContent
        };
        addWidget(categoryId, newWidget);
        setWidgetName('');
        setWidgetContent('');
        onClose(); // Close modal after adding widget
    };

    return (
        <div className="add-widget-modal">
            <input
                type="text"
                placeholder="Widget Name"
                value={widgetName}
                onChange={(e) => setWidgetName(e.target.value)}
            />
            <textarea
                placeholder="Widget Content"
                value={widgetContent}
                onChange={(e) => setWidgetContent(e.target.value)}
            />
            <div className="modal-buttons">
                <button onClick={handleAddWidget}>Confirm</button>
                <button onClick={onClose} style={{ marginLeft: '10px' }}>Cancel</button>
            </div>
        </div>
    );
};

export default AddWidgetModal;
