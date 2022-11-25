import { useState } from "react"
import Navbar from "./elements/navbar"
import NavbarDropdown from "./elements/navbarDropdown"
import Footer from "./elements/footer"

const Layout = ({ children, global, pageContext }) => {
  const { navbar, nestedNav, brand, footer, notificationBanner } = global.attributes

  const [bannerIsShown, setBannerIsShown] = useState(true)
  return (
    <div className="flex flex-col justify-between min-h-screen">
      {/* Aligned to the top */}
      <div className="flex-1">
        <NavbarDropdown navbar={nestedNav} brand={brand} pageContext={pageContext} />
        <div>{children}</div>
      </div>
      {/* Aligned to the bottom */}
      <Footer footer={footer} />
    </div>
  )
}

export default Layout
