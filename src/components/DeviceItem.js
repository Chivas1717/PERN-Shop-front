import React from 'react';
// import star from '../assets/star.png'
import {DEVICE_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";

const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    return (
        <div className="flex justify-center p-6 text-6xl bg-gray-100 border-2 border-gray-300 rounded-xl">
            temp card block
        </div>
        // <Col md={3} className={"mt-3"} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
        //     <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
        //         <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
        //         <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
        //             <div>Samsung...</div>
        //             <div className="d-flex align-items-center">
        //                 <div>{device.rating}</div>
        //                 <Image width={18} height={18} src={star}/>
        //             </div>
        //         </div>
        //         <div>{device.name}</div>
        //     </Card>
        // </Col>
    );
};

export default DeviceItem;