import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    return (
            <div className="w-62 h-full mr-8 grid-flow-row text-sm font-medium text-gray-900 bg-white shadow-md rounded-lg dark:bg-gray-50 dark:border-gray-600 dark:text-black">
                <div
                    style={{cursor: 'pointer'}}
                    className={"id" in device.selectedType ?
                        "block w-full h-16 px-4 py-2 border-b border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 dark:border-gray-600 dark:hover:bg-blue-300 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                        : "block w-full h-16 px-4 py-2 text-white border-b dark:bg-blue-500 rounded-lg cursor-pointer"
                    }
                    onClick={() => device.setSelectedType({})}
                >
                    All types
                </div>
                {device.types.map(type =>
                        <div
                            style={{cursor: 'pointer'}}
                            className={type.id === device.selectedType.id ? "block w-full h-16 px-4 py-2 dark:bg-blue-500 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 active:font-bold, active:text-indigo-500 active:bg-blue-900 dark:border-gray-600 dark:focus:ring-gray-500 dark:focus:text-white text-white"
                            : "block w-full h-16 px-4 py-2 border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 active:font-bold, active:text-indigo-500 active:bg-blue-900 dark:border-gray-600 dark:hover:bg-blue-300 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                            }
                            onClick={() => device.setSelectedType(type)}
                            key={type.id}
                        >
                            {type.name}
                        </div>
                    )}
            </div>
    );
});

export default TypeBar;