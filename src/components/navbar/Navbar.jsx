'use client'

import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/images/logo/logo-white.svg'
import React, {useContext, useEffect, useState} from 'react'
import styles from './navbar.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import { signOut, useSession } from 'next-auth/react'
import { ThemeContext } from '@/context/ThemeContext'
import { usePathname } from 'next/navigation'
const links = [
    {
        id: 1,
        title: 'Home',
        url: '/',
        navigable: true
    },
    {
        id: 2,
        title: 'About',
        url: '/about',
        navigable: true
    },
    {
        id: 3,
        title: 'Pricing',
        url: '/pricing',
        navigable: true
    },
    {
        id: 4,
        title: 'Team',
        url: '/team',
        navigable: true
    },
    {
        id: 5,
        title: 'Contact',
        url: '/contact',
        navigable: true
    },
    {
        id: 6,
        title: 'Product',
        url: '',
        navigable: false
    },
    {
        id: 7,
        title: 'Language',
        url: '',
        navigable: false
    }
]
const Navbar = () => {
    const [isShow, setIsShow] = useState(false)
    let [scrolling,setScrolling] = useState(false)
    const { mode } = useContext(ThemeContext)
    const pathname = usePathname()
    // const session = useSession()
    /*  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        lamamia
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );*/

    useEffect(() => {
        window.onscroll = function () {
            const ud_header = document.querySelector(".ud-header");
            const sticky = ud_header.offsetTop;
            // const logo = document.querySelector(".header-logo");

            if (window.pageYOffset > sticky) {
                ud_header.classList.add("sticky")
                setScrolling(true)
            } else {
                ud_header.classList.remove("sticky");
                setScrolling(false)
            }

            // // === logo change
            // if (ud_header.classList.contains("sticky")) {
            //     logo.src = "assets/images/logo/logo.svg";
            // } else {
            //     logo.src = "assets/images/logo/logo-white.svg";
            // }

            // show or hide the back-top-top button
        }
    })

    const handleClickDefaultBehavior = (e) => {
        e.preventDefault()
    }
    const handleScrollToView = (navigable=false,e) => {
        console.log(navigable)
        e.preventDefault();
        if(!navigable){
            return
        }
        document.querySelector(e.target.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            offsetTop: 1 - 60,
        });
    }
    return (
        <div className="ud-header absolute top-0 left-0 z-40 flex w-full items-center bg-transparent">
            <div className="container">
                <div className="relative -mx-4 flex items-center justify-between">
                    <div className="w-60 max-w-full px-4">
                        <Link href="index.html" className="navbar-logo block w-full py-5">
                            {/*<img src="@/assets/images/logo/logo-white.svg" alt="logo" className="header-logo w-full" />*/}
                            {/*<Image className={`header-logo w-full ${mode === 'light' ? 'brightness-0 invert' : ''} `} src={Logo} alt="logo" />*/}
                            <Image className={`header-logo w-full ${!scrolling ? 'brightness-0 invert' : ''} `} src={Logo} alt="logo" />
                        </Link>
                        {/*<a href="index.html" className="navbar-logo block w-full py-5">*/}
                        {/*    <img src="assets/images/logo/logo-white.svg" alt="logo" className="header-logo w-full" />*/}
                        {/*</a>*/}
                    </div>
                    <div className="flex w-full items-center justify-between px-4">
                        <div>
                            {/*<div className={`fixed right-0 top-0 h-full z-[9999] overflow-y-scroll overflow-x-hidden opacity-100 visible transition-all duration-300 ease-in-out w-auto min-w-[180px] py-[3.75rem] px-[1.2rem] sm:pb-[1.875rem] sm:w-full sm:px-[2.4rem] bg-white text-black border-l border-solid border-[#0000000d] sm:right-[150%] sm:opacity-0 sm:invisible`}>*/}
                            <div
                                className={`fixed top-0 h-screen z-[9999] overflow-y-scroll overflow-x-hidden opacity-100 visible transition-all duration-300 ease-in-out w-auto min-w-[180px] py-[3.75rem] px-[1.2rem] sm:pb-[1.875rem] sm:w-full sm:px-[2.4rem] bg-white text-black border-l border-solid border-[#0000000d] ${
                                    isShow ? 'right-[0] opacity-1 visible' : 'right-[-150%] opacity-0 invisible'
                                }`}
                            >
                                <ul className="p-0 m-0">
                                    {links.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <Link onClick={handleScrollToView.bind(this,item.navigable)} href={`#${item.title.toLowerCase()}`} className={`${item.navigable?'ud-menu-scroll':''} text-xl mt-0 my-4 ml-4 font-bold text-primary text-base`}>
                                                    {item.title}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <button
                                    id="navbarToggler"
                                    onClick={() => {
                                        setIsShow(!isShow)
                                    }}
                                    className="navbarTogglerActive absolute top-[1.875rem] right-4 m-0 mr-[-4px] translate-y-[-40%]"
                                >
                                    <span className="relative my-[6px] block h-[2px] w-[30px] bg-black"></span>
                                    <span className="relative my-[6px] block h-[2px] w-[30px] bg-black"></span>
                                    <span className="relative my-[6px] block h-[2px] w-[30px] bg-black"></span>
                                </button>
                            </div>
                            <button
                                id="navbarToggler"
                                onClick={() => {
                                    setIsShow(!isShow)
                                }}
                                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                            >
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                            </button>
                            <nav
                                id="navbarCollapse"
                                className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6"
                            >
                                <ul className="blcok lg:flex">
                                    <li className="group relative">
                                        <Link
                                            onClick={handleScrollToView.bind(this,true)}
                                            href="#home"
                                            className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li className="group relative">
                                        <Link
                                            onClick={handleScrollToView.bind(this,true)}
                                            href="#about"
                                            className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li className="group relative">
                                        <Link
                                            onClick={handleScrollToView.bind(this,true)}
                                            href="#pricing"
                                            className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                                        >
                                            Pricing
                                        </Link>
                                    </li>
                                    <li className="group relative">
                                        <Link
                                            onClick={handleScrollToView.bind(this,true)}
                                            href="#team"
                                            className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                                        >
                                            Team
                                        </Link>
                                    </li>
                                    <li className="group relative">
                                        <Link
                                            onClick={handleScrollToView.bind(this,true)}
                                            href="#contact"
                                            className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                    <li className="submenu-item group relative">
                                        <Link
                                            href="#"
                                            onClick={handleClickDefaultBehavior}
                                            className="relative mx-8 flex py-2 text-base text-dark after:absolute after:right-1 after:top-1/2 after:mt-[-2px] after:h-2 after:w-2 after:-translate-y-1/2 after:rotate-45 after:border-b-2 after:border-r-2 after:border-current group-hover:text-primary lg:mr-0 lg:ml-8 lg:inline-flex lg:py-6 lg:pl-0 lg:pr-4 lg:text-white lg:after:right-0 lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                                        >
                                            Product
                                        </Link>
                                        <div className="submenu relative top-full left-0 hidden w-[250px] rounded-sm bg-white p-4 transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full">
                                            <a href="about.html" className="block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary">
                                                About Page
                                            </a>
                                            <a href="pricing.html" className="block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary">
                                                Pricing Page
                                            </a>
                                            <a href="contact.html" className="block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary">
                                                Contact Page
                                            </a>
                                            <a href="blog-grids.html" className="block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary">
                                                Blog Grid Page
                                            </a>
                                            <a href="blog-details.html" className="block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary">
                                                Blog Details Page
                                            </a>
                                            <a href="signup.html" className="block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary">
                                                Sign Up Page
                                            </a>
                                            <a href="signin.html" className="block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary">
                                                Sign In Page
                                            </a>
                                            <a href="404.html" className="block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary">
                                                404 Page
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="darkmode-toggle hidden flex items-center">{/*<DarkModeToggle />*/}</div>
                        <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                            <a href="signin.html" className="loginBtn py-3 px-7 text-base font-medium text-white hover:opacity-70">
                                Sign In
                            </a>
                            <a
                                href="signup.html"
                                className="signUpBtn rounded-lg bg-white bg-opacity-20 py-3 px-6 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                            >
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
