import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

const Navbar = ({ navbar, pageContext }) => {
  const router = useRouter()
  //const [mobileMenuIsShown, setMobileMenuIsShown] = useState(false)

  return (
    <>
      {/* The actual navbar */}
      <nav className="border-gray-200 border-b-2 py-6 sm:py-2">
        <div className="container flex flex-row items-center justify-between">
          {/* Content aligned to the left */}
          <div className="flex flex-row items-center">
            {/* List of links on desktop */}
            <ul className="hidden list-none md:flex flex-row gap-4 items-baseline ml-10">
              {navbar.links.map((navLink) => (
                <li key={navLink.id}>
 
                    <div className="hover:text-gray-900 px-2 py-1">
                      {navLink.text}
                    </div>

                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}


export default Navbar
