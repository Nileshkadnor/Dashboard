// import React, { useState } from 'react';
// import Category from './Category';
// import data from '../data.json'; // Import JSON structure
// import ExampleWidget from './ExampleWidget';

// const Dashboard = () => {
//     const [categories, setCategories] = useState(data.categories);

//     const addWidget = (categoryId, widget) => {
//         setCategories(categories.map(category => {
//             if (category.id === categoryId) {
//                 return {
//                     ...category,
//                     widgets: [...category.widgets, widget]
//                 };
//             }
//             return category;
//         }));
//     };

//     const removeWidget = (categoryId, widgetId) => {
//         setCategories(categories.map(category => {
//             if (category.id === categoryId) {
//                 return {
//                     ...category,
//                     widgets: category.widgets.filter(widget => widget.id !== widgetId)
//                 };
//             }
//             return category;
//         }));
//     };

//     return (
//         <div className="dashboard">
//             {categories.map(category => (
//                 <Category
//                     key={category.id}
//                     category={category}
//                     addWidget={addWidget}
//                     removeWidget={removeWidget}
//                 />
//             ))}
//         </div>
//     );
// };

// export default Dashboard;

// import React, { useState } from 'react';
// import Category from './Category';
// import data from '../data.json';
// import ExampleWidget from './ExampleWidget';

// const Dashboard = () => {
//     const [categories, setCategories] = useState(data.categories);
//     const [searchQuery, setSearchQuery] = useState('');

//     // Function to add a widget to a category
//     const addWidget = (categoryId, widget) => {
//         setCategories(prevCategories =>
//             prevCategories.map(category =>
//                 category.id === categoryId
//                     ? { ...category, widgets: [...category.widgets, widget] }
//                     : category
//             )
//         );
//     };

//     // Function to remove a widget from a category
//     const removeWidget = (categoryId, widgetId) => {
//         setCategories(prevCategories =>
//             prevCategories.map(category =>
//                 category.id === categoryId
//                     ? {
//                         ...category,
//                         widgets: category.widgets.filter(widget => widget.id !== widgetId)
//                     }
//                     : category
//             )
//         );
//     };

//     // Handler for search input change
//     const handleSearchChange = (event) => {
//         setSearchQuery(event.target.value);
//     };

//     // Filter widgets based on search query
//     const filteredCategories = categories.map(category => ({
//         ...category,
//         widgets: category.widgets.filter(widget =>
//             widget.name.toLowerCase().includes(searchQuery.toLowerCase())
//         )
//     }));

//     return (
//         <div className="dashboard">
//             {/* Search bar */}
//             <input
//                 type="text"
//                 placeholder="Search widgets..."
//                 value={searchQuery}
//                 onChange={handleSearchChange}
//                 style={{ padding: '10px', marginBottom: '20px', width: '100%' }} // Add internal CSS styling
//             />
//             {filteredCategories.map(category => (
//                 <Category
//                     key={category.id}
//                     category={category}
//                     addWidget={addWidget}
//                     removeWidget={removeWidget}
//                 >
//                     {/* Render specific widgets here */}
//                     {category.id === 'cspm' && <ExampleWidget />}
//                 </Category>
//             ))}
//         </div>
//     );
// };

// export default Dashboard;


import React, { useState } from 'react';
import Category from './Category';
import data from '../data.json';
import ExampleWidget from './ExampleWidget';

const Dashboard = () => {
    const [categories, setCategories] = useState(data.categories);
    const [searchQuery, setSearchQuery] = useState('');

    // Function to add a widget to a category
    const addWidget = (categoryId, widget) => {
        setCategories(prevCategories =>
            prevCategories.map(category =>
                category.id === categoryId
                    ? { ...category, widgets: [...category.widgets, widget] }
                    : category
            )
        );
    };

    // Function to remove a widget from a category
    const removeWidget = (categoryId, widgetId) => {
        setCategories(prevCategories =>
            prevCategories.map(category =>
                category.id === categoryId
                    ? {
                        ...category,
                        widgets: category.widgets.filter(widget => widget.id !== widgetId)
                    }
                    : category
            )
        );
    };

    // Handler for search input change
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Filter widgets based on search query
    const filteredCategories = categories.map(category => ({
        ...category,
        widgets: category.widgets.filter(widget =>
            widget.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
    }));

    return (
        <div className="dashboard">
            {/* Search bar */}
            <input
                type="text"
                placeholder="Search widgets..."
                value={searchQuery}
                onChange={handleSearchChange}
                style={{ padding: '10px', marginBottom: '20px', width: '100%' }} // Add internal CSS styling
            />
            {filteredCategories.map(category => (
                <Category
                    key={category.id}
                    category={category}
                    addWidget={addWidget}
                    removeWidget={removeWidget}
                />
            ))}
        </div>
    );
};

export default Dashboard;
