import React, { useState } from 'react';
import Widget from './Widget';
import AddWidgetModal from './AddWidgetModal';

const Category = ({ category, addWidget, removeWidget }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleRemoveWidget = (widgetId) => {
        removeWidget(category.id, widgetId);
    };

    return (
        <div className="category">
            <h2>{category.name}</h2>
            <div className="widgets">
                {category.widgets.map(widget => (
                    <Widget
                        key={widget.id}
                        widget={widget}
                        onRemove={handleRemoveWidget}
                    />
                ))}
            </div>
            <div className="widget-controls">
                <button onClick={handleOpenModal}>Add Widget</button>
                <button className="removeBtn"
                    onClick={() => handleRemoveWidget(category.widgets[category.widgets.length - 1].id)}
                    disabled={category.widgets.length === 0}
                    
                >
                    Remove Widget
                </button>
            </div>
            {isModalOpen && (
                <AddWidgetModal
                    categoryId={category.id}
                    addWidget={(categoryId, newWidget) => {
                        addWidget(categoryId, newWidget);
                        handleCloseModal();
                    }}
                    onClose={handleCloseModal} 
                />
            )}
        </div>
    );
};

export default Category;
