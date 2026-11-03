import Link from "next/link";
import "./navBar.css"
const NavBar = () => {
    const navigation = [
    {label : "Me" ,href:"/"},
      { label: "About", href: "/about" },
      { label: "Projects", href: "/project" },
      { label: "Experience", href: "/experience" },
      { label: "Contact", href: "/contact" },
    
    ];
    return ( <>
    <header className="nav-wrapper">
        <nav className="home-nav">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

    </header>

     

    
    
    
    
    </> );
}
 
export default NavBar;