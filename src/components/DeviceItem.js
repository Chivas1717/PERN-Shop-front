import React from 'react';
// import star from '../assets/star.png'
import {DEVICE_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";

const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    return (
            <div className="max-w-2xl mx-auto" onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
                <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg p-8 cursor-pointer" src="https://www.ixbt.com/img/x780x600/r30/00/02/56/75/cover.jpg" alt="product image" />
                    <div className="px-5 pb-5">
                        <h3 className="text-gray-900 font-semibold cursor-pointer text-xl tracking-tight dark:text-white">{device.name}
                        </h3>
                        <div className="flex items-center mt-2.5 mb-5">
                            <h5 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">Rating:</h5>
                            <span className="bg-blue-100 text-yellow-400 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{device.rating}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white cursor-pointer">{device.price + "$"}</span>
                            <a href="#"
                               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                                to cart</a>
                        </div>
                    </div>
                </div>
            </div>
        // <Col md={3} classNameName={"mt-3"} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
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