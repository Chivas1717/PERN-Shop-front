import React, {useContext, useEffect} from 'react';
// import TypeBar from "../components/TypeBar";
// import BrandBar from "../components/BrandBar";
// import DeviceList from "../components/DeviceList";
// import Pages from "../components/Pages";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import TypeBar from "../components/TypeBar";


const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(null, null, 1, 2).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])

    console.log("in shop main page")

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 2).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
        console.log('aamflaa')
    }, [device.page, device.selectedType, device.selectedBrand,])

    return (
        <div className="my-12 grid grid-cols-4 gap-0.5">
            <TypeBar />
            <div className="border rounded-lg shadow-sm col-span-3">
                <BrandBar/>
                <DeviceList/>
                <Pages/>
            </div>
        </div>
        // <Container>
        //     <Row className="">
        //         <Col md={3}>
        //             <TypeBar/>
        //         </Col>
        //         <Col md={9}>
        //             <BrandBar/>
        //             <DeviceList/>
        //             <Pages/>
        //         </Col>
        //     </Row>
        // </Container>
    );
});

export default Shop;