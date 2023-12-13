import React from "react";
import { Outlet,Link } from "react-router-dom";


export const Menu = () =>{
    return(
        <>
            <div className="absolute right-0 top-0 h-20">
                <nav  className="w-screen h-full bg-zinc-400 flex text-center items-center">
                    <ul className="flex gap-x-16  text-3xl font-medium ">
                        <li>
                            <Link to="/ManuelTecnico" className="pl-12">Manual Técnico</Link>
                        </li>

                        <li>
                            <Link to="/ManualUsuario">Manual de Usuario</Link>
                        </li>
                    </ul>
                </nav>
            <Outlet/>

            </div>
        </>
    )

}