import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <div className="mb-6 grid grid-rows-3 grid-flow-col gap-4">
            <div
                style={{cursor:'pointer'}}
                className={"id" in device.selectedBrand ? "row-span-3 py-2 px-4 shadow-md no-underline rounded-full bg-white text-black font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-300 mr-2"
                    : "row-span-3 py-2 px-4 shadow-md no-underline rounded-full bg-blue-500 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light mr-2"}
                onClick={() => device.setSelectedBrand({})}
            >
                All brands
            </div>
            {device.brands.map(brand =>
                <div
                    style={{cursor:'pointer'}}
                    key={brand.id}
                    className={brand.id === device.selectedBrand.id ? "row-span-3 py-2 px-4 shadow-md no-underline rounded-full bg-blue-500 text-white font-sans font-semibold text-sm border-blue btn-primary  mr-2" : "row-span-3 py-2 px-4 shadow-md no-underline rounded-full bg-white text-black font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-300 focus:outline-none active:shadow-none mr-2"}
                    onClick={() => device.setSelectedBrand(brand)}
                >
                    {brand.name}
                </div>
            )}
        </div>
    );
});

export default BrandBar;