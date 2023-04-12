import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { debounce } from 'lodash';

const Nav = (props) => {

    const [menu, setMenu] = useState(false)
    const [hideNav, setHideNav] = useState(false)
    const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);
     

    const handleMenu = () => {
        setMenu(!menu)
    }
    // const handleHideNav = () => {
    //     // setHideNav(true)
    // }
   
    // ~~~~~~~~~~~~~~~~~~~~~
  
    useEffect(() => {
        // Props to: https://www.codemzy.com/blog/react-hook-scroll-direction-event-listener
        // Props to chatGPT for help on the debounce
        // let lastScrollY = window.pageYOffset;
        // // wrap the updateScrollDirection function in debounce so the NAV bar doesn't flicker on scroll
        // const updateScrollDirection = debounce(() => {
        //     const scrollY = window.pageYOffset;
        //     const direction = scrollY > lastScrollY ? true : false;
        //     if (direction !== hideNav) {
        //         if (props.mobile) {
        //             setHideNav(direction);
        //         } else {
        //             setHideNav(false)
        //         }
        //         setMenu(false)
        //     }
        //     lastScrollY = scrollY > 0 ? scrollY : 0;
        // }, 25); // set the debounce time in ms
        // window.addEventListener("scroll", updateScrollDirection); // add event listener
      
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
            props.setMobile(window.innerWidth < props.minWidth);
            setHideNav(false);
          };
      
        window.addEventListener('resize', handleWindowResize)
      
        return () => {
            // window.removeEventListener("scroll", updateScrollDirection); // clean up
            window.removeEventListener('resize', handleWindowResize)
        }
      
      }, [ ]); 
      
    // ~~~~~~~~~~~~~~~~~~~~~~

    if(props.mobile) { // this is the mobile NAV
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
                                            offset={-30}
                                            onClick={() => handleMenu()}
                                            >Welcome
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            className="navLink"
                                            to="calendar" 
                                            smooth={true} 
                                            offset={-35}
                                            onClick={() => handleMenu()}
                                            >Open Circles
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
                {/* {hideNav ?  
                    <></> 
                    : */}
                    <nav className="navContainer">
                        <header className='header'><b>Men of Mission and Service</b></header>
                        <div className="menuList">
                            <Link 
                                className="navLink"
                                to="mission" 
                                smooth={true} 
                                // onClick={() => handleMenu()}
                                >Welcome
                            </Link>
                            <Link 
                                className="navLink"
                                to="calendar" 
                                smooth={true} 
                                offset={-50}
                                // onClick={() => handleMenu()}
                                >Open Circles
                            </Link>
                            {/* <li><a href="#commitments" onClick={() => handleHideNav()}>Become a Member</a></li> */}
                        </div>  
                    </nav>  
                {/* } */}
            </>
        )
    }
    
}

export default Nav
  