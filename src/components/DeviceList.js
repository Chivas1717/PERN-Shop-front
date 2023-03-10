import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
    const {device} = useContext(Context)

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-4 gap-6">
                {device.devices.map(device =>
                    <DeviceItem key={device.id} device={device}/>
                )}
            </div>
        </div>
    );
});

export default DeviceList;