import React, {useContext} from 'react';
import {Context} from "../index";
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";


const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <nav className="bg-white border-gray-500 dark:bg-gray-700">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                <NavLink className="flex items-center text-gray-500 dark:text-white text-2xl" to={SHOP_ROUTE}>PERN SHOP</NavLink>
                {user.isAuth ?
                    <div className="flex items-center">
                        {user.role === "Admin" ? <button
                            className="mr-6 text-sm font-medium text-gray-500 dark:text-white"
                            onClick={() => navigate(ADMIN_ROUTE)}
                        >
                            Admin
                        </button> : <></>}
                        <button
                            onClick={() => window.confirm("Confirm logout") ? logOut() : ""}
                            className="text-sm font-medium text-blue-600 dark:text-red-500"
                        >
                            Logout
                        </button>
                        <div>
                        </div>
                    </div>
                    :
                    <div className="flex items-center">
                        <button className={"text-sm font-medium text-blue-600 dark:text-blue-500"} onClick={() => navigate(LOGIN_ROUTE)}>Authorization</button>
                    </div>
                }
            </div>
        </nav>
    )
})
//
// const NavBar = () => {
//     const {user} = useContext(Context)
//     return (
//         <nav className="bg-white border-gray-200 dark:bg-gray-900">
//             <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
//                 <a href="https://flowbite.com" className="flex items-center">
//                     <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9"
//                          alt="Flowbite Logo"/>
//                     <span
//                         className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//                 </a>
//                 <div className="flex items-center">
//                     <a href="#"
//                        className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">(555)
//                         412-1234</a>
//                     <a href="#"
//                        className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Login</a>
//                 </div>
//             </div>
//         </nav>
//     )
// }

export default NavBar