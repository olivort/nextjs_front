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

const Navbar = ({ navbar, brand, pageContext }) => {
  const router = useRouter()
  //this object is only for tailwind generating the possible css class that may be chosen from backend
  const colorsDefinition = {
    primary: ["bg-primary-700", "md:text-primary-700", "md:hover:text-primary-700"],
    neutral: ["bg-neutral-700", "md:text-neutral-700", "md:hover:text-neutral-700"],
    red:["bg-red-700", "md:text-red-700", "md:hover:text-red-700"],
    orange:["bg-orange-700", "md:text-orange-700", "md:hover:text-orange-700"],
    amber:["bg-amber-700", "md:text-amber-700", "md:hover:text-amber-700"],
    yellow:["bg-yellow-700", "md:text-yellow-700", "md:hover:text-yellow-700"],
    lime:["bg-lime-700", "md:text-lime-700", "md:hover:text-lime-700"],
    green:["bg-green-700", "md:text-green-700", "md:hover:text-green-700"],
    emerald:["bg-emerald-700", "md:text-emerald-700", "md:hover:text-emerald-700"],
    teal:["bg-teal-700", "md:text-teal-700", "md:hover:text-teal-700"],
    cyan:["bg-cyan-700", "md:text-cyan-700", "md:hover:text-cyan-700"],
    sky:["bg-sky-700", "md:text-sky-700", "md:hover:text-sky-700"],
    blue:["bg-blue-700", "md:text-blue-700", "md:hover:text-blue-700"],
    indigo:["bg-indigo-700", "md:text-indigo-700", "md:hover:text-indigo-700"],
    violet:["bg-violet-700", "md:text-violet-700", "md:hover:text-violet-700"],
    purple:["bg-purple-700", "md:text-purple-700", "md:hover:text-purple-700"],
    fuchsia:["bg-fuchsia-700", "md:text-fuchsia-700", "md:hover:text-fuchsia-700"],
    pink:["bg-pink-700", "md:text-pink-700", "md:hover:text-pink-700"],
    rose:["bg-rose-700", "md:text-rose-700", "md:hover:text-rose-700"],
  }
    
  return (
    <>
      {/* The actual navbar */}

    <nav class="border-gray-200 border-b-2 py-6 sm:py-2">
    <div class="container mx-auto flex flex-wrap items-center justify-between">
        <div class="flex">
        {/* logo */}  
        <Link href="/" class="h-8 w-32">
          <NextImage width="120" height="33" media={brand.logo} />
        </Link>
        {/* brand */}
            <span class="self-center text-lg font-semibold whitespace-nowrap">{brand.title} </span>
        </div>
        {/* mobile menu button */}
        <button data-collapse-toggle="mobile-menu" type="button" class="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <MdMenu class="h-8 w-auto"/>
        </button>
        <div class="hidden md:block w-full md:w-auto" id="mobile-menu">
        <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
        {/* dynamic menu: loop on navItem and loop on menuItem if navItem has submenu */}
        {  navbar.map((navItem)=>{
            if(navItem.navItemLink.page.data.attributes.primaryColor === null){
              var myMenuColor = "primary"
            }else {
              var myMenuColor = navItem.navItemLink.page.data.attributes.primaryColor.tailwindColor
            }

            return(
              <li key={navItem.navItemLink.page.data.id}>
              {navItem.menuItem.length === 0 &&
                /* navItem without dropdown */
                <Link href={`/${navItem.navItemLink.page.data.attributes.slug}`} >
                  <a class={`${pageContext.slug == navItem.navItemLink.page.data.attributes.slug ? "bg-"+myMenuColor+"-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-"+myMenuColor+"-700 md:p-0 rounded focus:outline-none" : "text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-"+myMenuColor+"-700 md:p-0"}`} aria-current="page">
                    {navItem.navItemLink.title}
                  </a>
                </Link>
              }
              {navItem.menuItem.length > 0 &&
                /* navItem with dropdown */
                <>
                <button id={`dropdownNavbarLink${navItem.navItemLink.page.data.id}`} data-dropdown-toggle={`dropdownNavbar${navItem.navItemLink.page.data.id}`} class={`block font-medium flex items-center justify-between w-full md:w-auto ${pageContext.slug == navItem.navItemLink.page.data.attributes.slug ? "bg-"+myMenuColor+"-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-"+myMenuColor+"-700 md:p-0 rounded focus:outline-none" : "text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-"+myMenuColor+"-700 md:p-0"}`}>{navItem.navItemLink.title} <MdArrowDropDown class="w-4 h-4 ml-1" /></button>
                <div id={`dropdownNavbar${navItem.navItemLink.page.data.id}`} class="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44">
                  <ul class="py-1" aria-labelledby="dropdownLargeButton">
                    {
                      navItem.menuItem.map((menuLink)=>{
                        return(
                        <li key={menuLink.page.data.id}>
                            <Link href={`/${menuLink.page.data.attributes.slug}`} >
                              <a class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">
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