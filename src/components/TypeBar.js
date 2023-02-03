import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const TypeBar = observer(() => {
    const {device} = useContext(Context) || {device: {types: ["laptop","laptop", "laptop", "laptop", "laptop" ]}}
    console.log(device)
    return (
        <div className="w-62 h-full mr-8 grid-flow-row text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {device.types.map(type =>
                    <div
                        style={{cursor: 'pointer'}}
                        className="block w-full h-16 px-4 py-2 border-b border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                        aria-current={type.id === device.selectedType.id}
                        onClick={() => device.setSelectedType(type)}
                        key={type.id}
                    >
                        {type.name}efqfq
                    </div>
                )}
        </div>
    );
});

export default TypeBar;