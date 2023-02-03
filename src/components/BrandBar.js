import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    device.brands.forEach(brand => console.log(brand))

    return (
        <div className="mb-6 grid grid-rows-3 grid-flow-col gap-4">
            {device.brands.map(brand =>
                <div
                    style={{cursor:'pointer'}}
                    key={brand.id}
                    className="row-span-3"
                    onClick={() => device.setSelectedBrand(brand)}
                    // border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name} temp
                </div>
            )}
        </div>
    );
});

export default BrandBar;