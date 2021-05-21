
import Logo from "../logo"
import logoImage from '../../assets/logo.svg'
import menuItems from '../header/header.data'
import { Link } from "react-scroll"
import Button from "../button"
import { useState } from "react"
import { HiDotsHorizontal } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";


const Header = ({ className }) => {
    const [menu, setMenu] = useState(false);
    return (
        <header className={className} id='header' >
            <div className=' hidden lg:container lg:w-full lg:flex lg:flex-row lg:items-center lg:px-14 lg:py-6'>

                <div className='cursor-pointer'>
                    <Logo src={logoImage}/>
                </div>
                
                
                <nav className='space-x-4 m-auto'>
                    {
                        menuItems && menuItems.map((items, i) => {
                            return (
                                <Link
                                    activeClass='active'
                                    to={items.path}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    key={i}
                                >
                                    {items.label}
                                </Link>
                                
                            )
                        })
                    }
                </nav>
 
                <Button Children='Buy now' />
            </div>
                
                
            <div className=" p-3 items-center w-full container  lg:hidden">
                <div className='float-left'>
                    <Logo src={logoImage}/>
                </div>
                
                <div className={menu ? "top-100 p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-10 md:mt-16" : "hidden p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-12 md:mt-16"}>
                    
                    <nav className='flex flex-col space-y-2 mb-4 '>
                    {
                        menuItems && menuItems.map((items, i) => {
                            return (
                                <Link
                                    activeClass='active'
                                    to={items.path}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    key={i}
                                >
                                    {items.label}
                                </Link>
                                
                            )
                        })
                    }
                    </nav>
                    
                    <Button Children='Buy now' />
                </div>
                <div className="float-right  xl:hidden">
                    {!menu ? (
                        <HiDotsHorizontal className="h-5" id="open" onClick={() => setMenu(true)} />
                    ) : (

                        <HiOutlineX className="h-5" id="close" onClick={() => setMenu(false)}/>
                    )}
                </div>
                
            </div>

 
        </header>
    )
}

export default Header
