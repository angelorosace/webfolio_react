import React, { useState } from "react";
import './../Navbar.css';
import './../Misc.css';

import NavbarItem from './NavbarItem';

const Navbar = (props) => {

    const [showMenu, setShowMenu] = useState(false);

    let hamburger_menu;

    const menu_class = props.theme.mode === 'light' ? "menu light" : "menu dark"

    if (showMenu) {
        hamburger_menu = 
        <div className={menu_class}>
            <NavbarItem mode={props.theme.mode} item_name='Portfolio' title="/portfolio"></NavbarItem>
            <NavbarItem mode={props.theme.mode} item_name='Posts' title="/posts"></NavbarItem>
        </div>;
    }

    return(
        <div className="nav">
            <div className="full_nav row container">
                <div className="col-sm-2" />
                <div className="col-sm-3"><NavbarItem mode={props.theme.mode} className="nav-brand" item_name='Angelo Rosace' title="/"></NavbarItem></div>
                <div className="col-sm-2"><NavbarItem mode={props.theme.mode} item_name='Portfolio' title="/portfolio"></NavbarItem></div>
                <div className="col-sm-2"><NavbarItem mode={props.theme.mode} item_name='Posts' title="/posts"></NavbarItem></div>
                <div className="col-sm-2 but">    
                    <button 
                        className={props.theme.mode === 'dark' ? "dark-button" : "light-button"}
                        onClick={e => 
                            props.toggle_function(
                                props.theme.mode === 'dark' ? {mode: 'light'} : {mode: 'dark'}
                            )
                        }
                    >
                        { props.theme.mode === 'dark'
                         ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
                         <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                       </svg>
                         : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
                         <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
                       </svg>  }
                    </button>
                </div>
            </div>

            <div className="container nav_mobile">
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col"><NavbarItem mode={props.theme.mode} className="nav-brand" item_name='Angelo Rosace' title="/"></NavbarItem></div>
                    <div className="but">
                    <button 
                        className={props.theme.mode === 'dark' ? "dark-button" : "light-button"}
                        onClick={e => 
                            props.toggle_function(
                                props.theme.mode === 'dark' ? {mode: 'light'} : {mode: 'dark'}
                            )
                        }
                    >
                        { props.theme.mode === 'dark'
                            ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
                            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                        </svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
                            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
                        </svg>  }
                    </button>
                    </div>
                    <div className="but">
                        <button
                            className={props.theme.mode === 'dark' ? "dark-ham-button" : "light-ham-button"}
                            onClick={() => setShowMenu(!showMenu)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </button>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
            </div>
        
            {hamburger_menu}
        </div>
        
    );
};

export default Navbar;