"use client"

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const toggleMenu = () => {
    setNavMenuOpen((prev) => !prev);
  };


  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="main-header main-header-three">
        <nav className="main-menu">
          <div className="main-menu__wrapper">
            <div className="container">
              <div className="main-menu__wrapper-inner">
                <div className="main-menu__left">
                  <div className="main-menu__logo">
                    <a href="/">
                      <img
                        src="/assets/images/resources/logo-2-new.webp"
                        alt=""
                        width={120}
                      />
                    </a>
                  </div>
                </div>
                <div className="main-menu__main-menu-box">
                  <a
                    href="#"
                    className="mobile-nav__toggler"
                    onClick={toggleMenu}
                  >
                    <i className="fa fa-bars"></i>
                  </a>
                  <ul className="main-menu__list">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about-us">About</Link>
                    </li>
                    <li>
                      <Link href="/jobs">Jobs</Link>
                    </li>
                    <li>
                      <Link href="/course">Course</Link>
                    </li>
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="main-menu-two__right">
                  <div className="main-menu-two__search-box">
                    <a
                      href="#"
                      className="main-menu-two__search searcher-toggler-box icon-search"
                    ></a>
                  </div>
                  <div className="main-menu-two__signin-reg">
                    <div className="main-menu-two__signin-reg-icon">
                      <span className="icon-user-plus"></span>
                    </div>
                    <div className="main-menu-two__signin-reg-content">
                      <Link href="/login" className="main-menu-two__signin">
                        Sign in
                      </Link>
                      <Link href="/login" className="main-menu-two__reg">
                        Register
                      </Link>
                    </div>
                  </div>
                  <div className="main-menu-two__support-box">
                    <p className="main-menu-two__support-text">
                      {" "}
                      <span className="icon-contact"></span> Support
                    </p>
                    <h5 className="main-menu-two__support-number">
                      <a href="tel:1212345678900">+12 (123) 456 78900</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>




      <div className={scrolled ? "stricky-header stricked-menu main-menu stricky-fixed" : "stricky-header stricked-menu main-menu"}>
        <div className="sticky-header__content">
          <nav className="main-menu ">
            <div className="main-menu__wrapper">
              <div className="container">
                <div className="main-menu__wrapper-inner">
                  <div className="main-menu__left">
                    <div className="main-menu__logo">
                      <a href="/">
                        <img
                          src="/assets/images/resources/logo-2-new.webp"
                          alt=""
                          width={120}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="main-menu__main-menu-box">
                    <a
                      href="#"
                      className="mobile-nav__toggler"
                      onClick={toggleMenu}
                    >
                      <i className="fa fa-bars"></i>
                    </a>
                    <ul className="main-menu__list">
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/about-us">About</Link>
                      </li>
                      <li>
                        <Link href="/jobs">Jobs</Link>
                      </li>
                      <li>
                        <Link href="/course">Course</Link>
                      </li>
                      <li>
                        <Link href="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="main-menu-two__right">
                    <div className="main-menu-two__search-box">
                      <a
                        href="#"
                        className="main-menu-two__search searcher-toggler-box icon-search"
                      ></a>
                    </div>
                    <div className="main-menu-two__signin-reg">
                      <div className="main-menu-two__signin-reg-icon">
                        <span className="icon-user-plus"></span>
                      </div>
                      <div className="main-menu-two__signin-reg-content">
                        <Link href="/login" className="main-menu-two__signin">
                          Sign in
                        </Link>
                        <Link href="/login" className="main-menu-two__reg">
                          Register
                        </Link>
                      </div>
                    </div>
                    <div className="main-menu-two__support-box">
                      <p className="main-menu-two__support-text">
                        {" "}
                        <span className="icon-contact"></span> Support
                      </p>
                      <h5 className="main-menu-two__support-number">
                        <a href="tel:1212345678900">+12 (123) 456 78900</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>




      <div className={`${navMenuOpen ? "mobile-nav__wrapper expanded" : "mobile-nav__wrapper"}`}>

        <div className="mobile-nav__overlay mobile-nav__toggler" onClick={toggleMenu}></div>

        <div className="mobile-nav__content">

          <span className="mobile-nav__close mobile-nav__toggler" onClick={toggleMenu}>
            <i className="fa fa-times"></i>
          </span>


          <div className="logo-box">
            <a href="/" aria-label="logo image">
              <img src="/assets/images/resources/logo-2-new.webp" width="150" alt="" />
            </a>
          </div>

          <div className="mobile-nav__container">
            <ul className="main-menu__list" onClick={toggleMenu}>
              <li>
                <Link href="/">Home</Link>
              </li >

              <li>
                <Link href="/about-us">About</Link>
              </li >

              <li>
                <Link href="/jobs">Jobs</Link>
              </li>

              <li>
                <Link href="/course">Course</Link>
              </li>

              <li>
                <Link href="/blog">Blog</Link>
              </li >
              
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul >
          </div >

          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <a href="mailto:needhelp@fistudy.com">needhelp@fistudy.com</a>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <a href="tel:666-888-0000">666 888 0000</a>
            </li>
          </ul>


          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-facebook-square"></a>
              <a href="#" className="fab fa-pinterest-p"></a>
              <a href="#" className="fab fa-instagram"></a>
            </div>
          </div>
        </div >
      </div >
    </>
  );
}
