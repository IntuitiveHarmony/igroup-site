import { useState, useEffect } from 'react'

const Nav = () => {
    const [menu, setMenu] = useState(false)
    const [hideNav, setHideNav] = useState(false)
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
      ]);
    

    const handleMenu = () => {
        setMenu(!menu)
    }
    const handleHideNav = () => {
        setHideNav(true)
    }
    // ~~~~~~~~~~~~~~~~~~~~~
    // Props to: https://www.codemzy.com/blog/react-hook-scroll-direction-event-listener
    useEffect(() => {
        let lastScrollY = window.pageYOffset;
        // function to run on scroll
        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? true : false;
            if (direction !== hideNav) {
              setHideNav(direction);
              setMenu(false)
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener("scroll", updateScrollDirection); // add event listener

        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight])
          }
        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener("scroll", updateScrollDirection); // clean up
            window.removeEventListener('resize', handleWindowResize)
        }

    }, [hideNav]); // run when scroll direction changes
    // ~~~~~~~~~~~~~~~~~~~~~~

    if(windowSize[0] < 900) { // this is the mobile NAV
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
                                    <li><a className="navLink" href="#mission" onClick={() => handleHideNav()}>Who Are We?</a></li>
                                    <li><a className="navLink" href="#calendar" onClick={() => handleHideNav()}>Open Meetings</a></li>
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
                        <div className="menuContainer">
                                <ul className="menuList">
                                    <li><a href="#mission" onClick={() => handleHideNav()}>Who Are We?</a></li>
                                    <li><a href="#calendar" onClick={() => handleHideNav()}>Open Meetings</a></li>
                                    {/* <li><a href="#commitments" onClick={() => handleHideNav()}>Become a Member</a></li> */}
                                </ul>
                            </div>
                        {/* <div className='iconContainer'>  
                        <i 
                            className={menu ? "fa-solid fa-x" : "fa-solid fa-bars"} 
                            id="menuIcon" 
                            onClick={() => handleMenu()}>
                        </i>
                        </div> */}
                        
                        {menu ? 
                            <div className="menuContainer">
                                <ul className="menuList">
                                    <li><a href="#mission" onClick={() => handleHideNav()}>Who Are We?</a></li>
                                    <li><a href="#calendar" onClick={() => handleHideNav()}>Open Meetings</a></li>
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
    }
    
}

export default Nav