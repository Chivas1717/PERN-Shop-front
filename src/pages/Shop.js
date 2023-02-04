import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(null, null, 1, 10).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 10).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedType, device.selectedBrand,])

    return (
        <div className="my-12 mx-12 grid grid-cols-4 grid-rows-3 gap-0.5">
            <TypeBar />
            <div className="col-span-3 row-span-3">
                <BrandBar />
                <DeviceList/>
            {/*    <Pages/>*/}
            </div>
        </div>
    );
});

export default Shop;