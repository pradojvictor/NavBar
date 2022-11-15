import { useState, useEffect, useRef } from "react"
import Link from "../Link"
import { WrapperHeader } from "./style"


export default function Header() {

    // class MobileNavBar {
    //     mobile_menu: any
    //     nav_List: any
    //     nav_Links: any
    //     activeClass: string
    //    constructor({mobile_menu, nav_List, nav_Links}: any) {
    //     this.mobile_menu = document.querySelector(mobile_menu);
    //     this.nav_List = document.querySelector(nav_List);
    //     this.nav_Links = document.querySelectorAll(nav_Links);
    //     this.activeClass = "active";
    //    }

    //    addClickEvent() {
    //     this.mobile_menu.addEventListener("click", this.handleClick);
    //    }

    //    init() {
    //     if (this.mobile_menu) {
    //         this.addClickEvent();
    //     }
    //     return this;
    //    }
    // }




    // const mobileNavBar = new MobileNavBar (
    //     ".mobile_menu",
    // );
    // mobileNavBar.init();

    //  const click = () => {
    //      console.log("deu certo");
    //  }

    // const useOutsideClick = (el: any, initialState: any) => {
    //     const [isActive, setIsActive] = useState(initialState)
    //     useEffect( () => {
    //         const onclick = (e: any) => {
    //             if(el.current !== null && !el.current.contains(e.target)) {
    //                 setIsActive(!isActive);
    //             }
    //         }

    //         if(isActive) {
    //             window.addEventListener("click", onclick)
    //         }

    //         return () => {
    //             window.removeEventListener("click", onclick)
    //         }
    //     }, [isActive, el])

    //     return [isActive, setIsActive]
    // }

   
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
