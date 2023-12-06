import React from "react";
import { Outlet,Link } from "react-router-dom";


export const Menu = () =>{
    return(
        <>
            <div className="absolute right-0 top-0 h-20">
                <nav  className="w-screen h-full bg-red-800">
                    <ul>
                        <li>
                            <link to="/">Inico</link>
                        </li>
                    </ul>
                </nav>
            <Outlet/>

            </div>
        </>
    )

}