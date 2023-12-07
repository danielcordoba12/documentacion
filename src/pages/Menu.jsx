import React from "react";
import { Outlet,Link } from "react-router-dom";


export const Menu = () =>{
    return(
        <>
            <div className="absolute right-0 top-0 h-20">
                <nav  className="w-screen h-full bg-sky-600 flex text-center items-center">
                    <ul className="flex gap-x-16  text-3xl font-medium ">
                        <li>
                            <Link to="/" className="pl-12">Inico</Link>
                        </li>
                        <li>
                            <Link to="/prerequisitos">Prerequisitos</Link>
                        </li>
                        <li>
                            <Link to="/frameworks">Frameworks</Link>
                        </li>
                        <li>
                            <Link to="/diagramas">Diagramas</Link>
                        </li>
                        <li>
                            <Link to="/scrips">Scrips</Link>
                        </li>
                    </ul>
                </nav>
            <Outlet/>

            </div>
        </>
    )

}