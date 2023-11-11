import { useState, useEffect, useRef } from "react"
import Link from "../Link"
import { WrapperHeader } from "./style"


export default function Header() {

    const [isActive, setIsActive] = useState(false)
    const onClick = () => setIsActive(!isActive)
   
    

    return (
        <WrapperHeader>
            <nav >
                <h1><Link classname="logo" texto="Solar System" redirect="/" target={undefined} /></h1>

                <div onClick={onClick} className="mobile_menu">
                    <div className="line_1"></div>
                    <div className="line_2"></div>
                    <div className="line_3"></div>
                </div>

                <ul  className={`${isActive ? "active" : "inactive"}`} >
                    <li><Link texto="Start" redirect="/" target={undefined} /></li>
                    <li><Link texto="Planets" redirect="/" target={undefined} /></li>
                    <li><Link texto="Moons" redirect="/" target={undefined} /></li>
                    <li><Link texto="Sun" redirect="/" target={undefined} /></li>
                    <li><Link texto="About" redirect="/" target={undefined} /></li>
                </ul>
            </nav>
        </WrapperHeader>
    )
}
