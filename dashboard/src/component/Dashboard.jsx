

import React, { useState } from 'react';
import Category from './Category';
import data from '../data.json';
import ExampleWidget from './ExampleWidget';

const Dashboard = () => {
    const [categories, setCategories] = useState(data.categories);
    const [searchQuery, setSearchQuery] = useState('');

    
    const addWidget = (categoryId, widget) => {
        setCategories(prevCategories =>
            prevCategories.map(category =>
                category.id === categoryId
                    ? { ...category, widgets: [...category.widgets, widget] }
                    : category
            )
        );
    };

    
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

    
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    
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
                style={{ padding: '10px', marginBottom: '20px', width: '100%' }} 
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
