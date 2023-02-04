import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { debounce } from 'lodash';

const Nav = () => {
    const minWidth = 900;

    const [menu, setMenu] = useState(false)
    const [hideNav, setHideNav] = useState(false)
    const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);
    const [mobile, setMobile] = useState(window.innerWidth < minWidth)
    const [desktop, setDesktop] = useState(window.innerWidth > minWidth)  
    

    const handleMenu = () => {
        setMenu(!menu)
    }
    const handleHideNav = () => {
        setHideNav(true)
    }
   
    // ~~~~~~~~~~~~~~~~~~~~~
  
    useEffect(() => {
        // Props to: https://www.codemzy.com/blog/react-hook-scroll-direction-event-listener
        // Props to chatGPT for help on the debounce
        let lastScrollY = window.pageYOffset;
        // wrap the updateScrollDirection function in debounce
        const updateScrollDirection = debounce(() => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? true : false;
            if (direction !== hideNav) {
                if (mobile) {
                    setHideNav(direction);
                } else {
                    setHideNav(false)
                }
              
                setMenu(false)
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        }, 50); // set the debounce time to 200ms
        
        window.addEventListener("scroll", updateScrollDirection); // add event listener
      
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
            setMobile(window.innerWidth < minWidth);
            setDesktop(window.innerWidth > minWidth);
            setHideNav(false);
          };
      
        window.addEventListener('resize', handleWindowResize)
      
        return () => {
            window.removeEventListener("scroll", updateScrollDirection); // clean up
            window.removeEventListener('resize', handleWindowResize)
        }
      
      }, [hideNav]); // run when scroll direction changes
      
    // ~~~~~~~~~~~~~~~~~~~~~~

    if(mobile) { // this is the mobile NAV
        return (
            <>
                {hideNav ?  
                    <></> 
                    :
                    <nav className="navContainer">
                        <header className='header'><b>Men of Mission and Service</b></header>
                        <div className='iconContainer'>
                        <i 
                            className={menu ? "fa-solid fa-x" : "fa-solid fa-bars"} 
                            id="menuIcon" 
                            onClick={() => handleMenu()}>
                        </i>
                        </div>
                        
                        {menu ? 
                            <div className="menuContainer">
                                <ul className="menuList">
                                    <li>
                                        <Link 
                                            className="navLink"
                                            to="mission" 
                                            smooth={true} 
                                            onClick={() => handleHideNav()}
                                            >Who are we?
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            className="navLink"
                                            to="calendar" 
                                            smooth={true} 
                                            onClick={() => handleHideNav()}
                                            >Calendar
                                        </Link>
                                    </li>
                                    {/* <li><a className="navLink" href="#mission" onClick={() => handleHideNav()}>Who Are We?</a></li>
                                    <li><a className="navLink" href="#calendar" onClick={() => handleHideNav()}>Open Meetings</a></li> */}
                                    {/* <li><a href="#commitments" onClick={() => handleHideNav()}>Become a Member</a></li> */}
                                </ul>
                            </div>
                            : 
                            <></> 
                        }   
                    </nav>  
                }
            </>
        )
    } else { 
        return (
            <>
                {hideNav ?  
                    <></> 
                    :
                    <nav className="navContainer">
                        <header className='header'><b>Men of Mission and Service</b></header>
                        <div className="menuList">
                            <Link 
                                className="navLink"
                                to="mission" 
                                smooth={true} 
                                // onClick={() => handleHideNav()}
                                >Who are we?
                            </Link>
                            <Link 
                                className="navLink"
                                to="calendar" 
                                smooth={true} 
                                // onClick={() => handleHideNav()}
                                >Calendar
                            </Link>
                            {/* <li><a href="#commitments" onClick={() => handleHideNav()}>Become a Member</a></li> */}
                        </div>  
                    </nav>  
                }
            </>
        )
    }
    
}

export default Nav
  