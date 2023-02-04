import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <div className="mb-6 grid grid-rows-3 grid-flow-col gap-4">
            {device.brands.map(brand =>
                <div
                    style={{cursor:'pointer'}}
                    key={brand.id}
                    className={brand.id === device.selectedBrand.id ? "row-span-3 border-amber-800 bg-blue-900 rounded-lg" : "row-span-3 border-amber-800 bg-blue-900"}
                    onClick={() => device.setSelectedBrand(brand)}
                    // border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </div>
            )}
        </div>
    );
});

export default BrandBar;