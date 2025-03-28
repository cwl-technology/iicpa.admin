"use client"


import React, { useState } from 'react'

const Header = ({ toggleSidebar, toggleTheme,sidebar }) => {
    const [notifications, setNotification] = useState(false)
    const toggleNotification = () => {
        setNotification((prevState) => !prevState)
    };


    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        window.location.href = "/logout";
    };

    return (
        <>
            <header className="main-header">
                <div className="d-flex align-items-center logo-box justify-content-start">
                    {/* <!-- Logo --> */}
                    <a href="#" className="logo">
                        {/* <!-- logo--> */}
                        <div className={`logo-mini w-40 ${!sidebar?"d-none":""}`}>
                            <span className="light-logo"><img src="/assets/images/iicpa/logo-1-white.webp" alt="logo" /></span>
                            <span className="dark-logo"><img src="/assets/images/iicpa/logo-1-white.webp" alt="logo" /></span>
                        </div>
                        <div className="logo-lg 2-10">
                            <span className="light-logo"><img src="/assets/images/iicpa/logo-2-white.webp" alt="logo" /></span>
                            <span className="dark-logo"><img src="/assets/images/iicpa/logo-2-white.webp" alt="logo" /></span>
                        </div>
                    </a>
                </div>
                {/* <!-- Header Navbar --> */}
                <nav className="navbar navbar-static-top">
                    {/* <!-- Sidebar toggle button--> */}
                    <div className="app-menu">
                        <ul className="header-megamenu nav">
                            <li className="btn-group nav-item" onClick={toggleSidebar}>
                                <a href="#" className="waves-effect waves-light nav-link push-btn btn-primary-light ms-0" data-toggle="push-menu" role="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                                </a>
                            </li>
                            <li className="btn-group d-lg-inline-flex d-none">
                                <div className="app-menu">
                                    <div className="search-bx mx-5">
                                        <form>
                                            <div className="input-group">
                                                <input type="search" className="form-control" placeholder="Search" />
                                                <div className="input-group-append">
                                                    <button className="btn" type="submit" id="button-addon3"><i className="icon-Search"><span className="path1"></span><span className="path2"></span></i></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="navbar-custom-menu r-side">
                        <ul className="nav navbar-nav">
                            <li className="btn-group d-md-inline-flex d-none" >
                                <a href="#" title="skin Change" className="waves-effect skin-toggle waves-light">
                                    <label className="switch">
                                        <input type="checkbox" data-mainsidebarskin="toggle" id="toggle_left_sidebar_skin" onClick={toggleTheme} />
                                        <span className="switch-on">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                                        </span>
                                        <span className="switch-off">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                                        </span>
                                    </label>
                                </a>
                            </li>

                            <li className="dropdown notifications-menu btn-group" onClick={toggleNotification}>
                                <a href="#" className={`${notifications ? "waves-effect waves-light btn-primary-light svg-bt-icon bg-transparent show" : "waves-effect waves-light btn-primary-light svg-bt-icon bg-transparent"}`} data-bs-toggle="dropdown" title="Notifications">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path></svg>
                                    <div className="pulse-wave"></div>
                                </a>
                                <ul className={`${notifications ? "dropdown-menu animated bounceIn show" : "dropdown-menu animated bounceIn"}`}>
                                    <li className="header">
                                        <div className="p-20">
                                            <div className="flexbox">
                                                <div>
                                                    <h4 className="mb-0 mt-0">Notifications</h4>
                                                </div>
                                                <div>
                                                    <a href="#" className="text-danger">Clear All</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        {/* <!-- inner menu: contains the actual data --> */}
                                        <ul className="menu sm-scrol">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-users text-info"></i> Curabitur id eros quis nunc suscipit blandit.
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-warning text-warning"></i> Duis malesuada justo eu sapien elementum, in semper diam posuere.
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-users text-danger"></i> Donec at nisi sit amet tortor commodo porttitor pretium a erat.
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-shopping-cart text-success"></i> In gravida mauris et nisi
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-user text-danger"></i> Praesent eu lacus in libero dictum fermentum.
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-user text-primary"></i> Nunc fringilla lorem
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-user text-success"></i> Nullam euismod dolor ut quam interdum, at scelerisque ipsum imperdiet.
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="footer">
                                        <a href="#">View all</a>
                                    </li>
                                </ul>
                            </li>

                            {/* <!-- User Account--> */}
                            {/* <li className="dropdown user user-menu">
                                <a
                                    className="waves-effect waves-light dropdown-toggle w-auto l-h-12 bg-transparent p-0 no-shadow"
                                    title="User"
                                    onClick={toggleDropdown}
                                >
                                    <div className="d-flex pt-1  align-items-center">
                                        <img src="/assets/images/avatar/avatar-13.png"
                                            className="avatar rounded-circle bg-primary-light h-40 w-40"
                                            alt="" />
                                        <div className="text-end me-10 ">
                                            <p className="pt-5 fs-14 mb-1 fw-700">Nil Yeager</p>
                                            <small className="fs-10 mb-0  text-uppercase text-mute">Center</small>
                                        </div>

                                    </div>
                                </a>
                                {isOpen && (
                                    <ul className="dropdown-menu dropdown-menu-end show">
                                        <li>
                                            <button className="dropdown-item" onClick={handleLogout}>
                                                <i className="fas fa-sign-out-alt me-2"></i> Logout
                                            </button>
                                        </li>
                                    </ul>
                                )}
                            </li> */}

                        </ul>
                    </div>
                </nav>
            </header>
        </>

    )
}

export default Header