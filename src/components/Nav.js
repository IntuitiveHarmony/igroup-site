import { useState, useEffect } from 'react'

const Nav = () => {
    const [menu, setMenu] = useState(false)
    const [hideNav, setHideNav] = useState(false);

    const handleMenu = () => {
        setMenu(!menu)
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
        return () => {
            window.removeEventListener("scroll", updateScrollDirection); // clean up
        }
    }, [hideNav]); // run when scroll direction changes
    // ~~~~~~~~~~~~~~~~~~~~~~

    return (
        <>
            {hideNav ?  
                <></> 
                :
                <>
                    <div className="navContainer" id="navContainer">
                        <p><b>Men of Mission and Service</b></p>
                        <div className="iconContainer">
                        <i 
                            className={menu ? "fa-solid fa-x" : "fa-solid fa-bars"} 
                            id="menuIcon" 
                            onClick={() => handleMenu()}>
                        </i>
                        </div>
                        
                        {menu ? 
                            <>
                                <div className="menuContainer">
                                    <ul className="menuList">
                                        <li><a href="#mission">Our Mission</a></li>
                                        <li><a href="#calendar">Open Meetings</a></li>
                                        <li><a href="#commitments">Steps to Become a Member</a></li>
                                    </ul>
                                </div>
                            </> 
                            : 
                            <></> 
                        }   
                    </div>
                </> 
            }
        </>
    )
}

export default Nav