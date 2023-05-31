import Reactm, { useState } from 'react';

const Sidebar = ({ onSelectComponent }) => {

    const componentConfig = [
        { name: 'PoolList', displayName: 'Pools' },
        { name: 'DepositCard', displayName: 'Deposit' },
    ];

    const [selectedComponent, setSelectedComponent] = useState('PoolList');

    const handleClick = (componentName) => {
        onSelectComponent(componentName);
        setSelectedComponent(componentName);
    }

    return (
        <div className="h-screen text-gray-600 mt-20">
            {componentConfig.map((config) => (
                <button
                    key={config.name}
                    className={`p-1 m-2 w-full text-left ${selectedComponent === config.name ? 'bg-white rounded-md' : ''}`}
                    onClick={() => handleClick(config.name)}
                >
                    {config.displayName}
                </button>
            ))}
        </div>
    );
}

export default Sidebar