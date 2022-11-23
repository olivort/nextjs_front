import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

import NextImage from "./image"
import CustomLink from "./custom-link"
import MobileNavMenu from "./mobile-nav-menu"
import { MdMenu } from "react-icons/md"
import { MdArrowDropDown } from "react-icons/md"
import ButtonLink from "./button-link"
import { getButtonAppearance } from "../../lib/button"

const Navbar = ({ navbar, pageContext }) => {
  const router = useRouter()
  
console.log(pageContext)
  return (
    <>
      {/* The actual navbar */}

    <nav class="border-gray-200 border-b-2 py-6 sm:py-2">
    <div class="container mx-auto flex flex-wrap items-center justify-between">
        <div class="flex">
        {/* logo */}  
        <Link href="/" className="h-8 w-32">
          LOGO
          {/*<NextImage width="120" height="33" media={navbar.logo} /> */}
        </Link>
        {/* brand */}
            <span class="self-center text-lg font-semibold whitespace-nowrap">FlowBite</span>
        </div>
        {/* mobile menu button */}
        <button data-collapse-toggle="mobile-menu" type="button" class="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <MdMenu className="h-8 w-auto" />
        </button>
        <div class="hidden md:block w-full md:w-auto" id="mobile-menu">
        <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
        {/* dynamic menu: loop on navItem and loop on menuItem if navItem has submenu */}
        {  navbar.map((navItem)=>{
            return(
              <li key={navItem.navItemLink.page.data.id}>
              {navItem.menuItem.length === 0 &&
                /* navItem without dropdown */
                <Link href={`/${navItem.navItemLink.page.data.attributes.slug}`} >
                  <a className={`${pageContext.slug == navItem.navItemLink.page.data.attributes.slug ? "bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded focus:outline-none" : "text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"}`} aria-current="page">
                    {navItem.navItemLink.title}
                  </a>
                </Link>
              }
              {navItem.menuItem.length > 0 &&
                /* navItem with dropdown */
                <>
                <button id={`dropdownNavbarLink${navItem.navItemLink.page.data.id}`} data-dropdown-toggle={`dropdownNavbar${navItem.navItemLink.page.data.id}`} class={`block font-medium flex items-center justify-between w-full md:w-auto ${pageContext.slug == navItem.navItemLink.page.data.attributes.slug ? "bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded focus:outline-none" : "text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"}`}>{navItem.navItemLink.title} <MdArrowDropDown className="w-4 h-4 ml-1" /></button>
                <div id={`dropdownNavbar${navItem.navItemLink.page.data.id}`} class="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44">
                  <ul class="py-1" aria-labelledby="dropdownLargeButton">
                    {
                      navItem.menuItem.map((menuLink)=>{
                        return(
                        <li key={menuLink.page.data.id}>
                            <Link href={`/${menuLink.page.data.attributes.slug}`} >
                              <a className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">
                                {menuLink.title}
                              </a>
                            </Link>
                        </li>
                        )            
                      })
                    }            
                  </ul>
                </div>        
                </>
              }
              </li>    

            )
          })
        }
        </ul>
        </div>
    </div>
    </nav>

    <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>
      
    </>
  )
}


export default Navbar