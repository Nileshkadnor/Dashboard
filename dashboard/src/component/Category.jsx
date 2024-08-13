// import React, { useState } from 'react';
// import Widget from './Widget';
// import AddWidgetModal from './AddWidgetModal';

// const Category = ({ category, addWidget, removeWidget }) => {
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const handleOpenModal = () => {
//         setIsModalOpen(true);
//     };

//     const handleCloseModal = () => {
//         setIsModalOpen(false);
//     };

//     const handleRemoveWidget = () => {
//         if (category.widgets.length > 0) {
//             const lastWidgetId = category.widgets[category.widgets.length - 1].id;
//             removeWidget(category.id, lastWidgetId);
//         }
//     };

//     return (
//         <div className="category">
//             <h2>{category.name}</h2>
//             <div className="widgets">
//                 {category.widgets.map(widget => (
//                     <Widget
//                         key={widget.id}
//                         widget={widget}
//                     />
//                 ))}
//             </div>
//             <div className="widget-controls">
//                 <button onClick={handleOpenModal}>Add Widget</button>
//                 <button
//     onClick={handleRemoveWidget}
//     disabled={category.widgets.length === 0}
//     style={{ padding: '10px 40px', borderRadius: '3px' }}
// >
//     Remove Widget
// </button>

//             </div>
//             {isModalOpen && (
//                 <AddWidgetModal
//                     categoryId={category.id}
//                     addWidget={(categoryId, newWidget) => {
//                         addWidget(categoryId, newWidget);
//                         handleCloseModal();
//                     }}
//                 />
//             )}
//         </div>
//     );
// };

// export default Category;


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
                    onClose={handleCloseModal} // Pass the close function to modal
                />
            )}
        </div>
    );
};

export default Category;
