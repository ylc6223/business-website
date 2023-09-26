'use client'

import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/images/logo/logo-white.svg'
import React, {useContext} from 'react'
import styles from './navbar.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import { signOut, useSession } from 'next-auth/react'
import {ThemeContext} from "@/context/ThemeContext";

const links = [
    {
        id: 1,
        title: 'Home',
        url: '/'
    },
    {
        id: 2,
        title: 'Portfolio',
        url: '/portfolio'
    },
    {
        id: 3,
        title: 'Blog',
        url: '/blog'
    },
    {
        id: 4,
        title: 'About',
        url: '/about'
    },
    {
        id: 5,
        title: 'Contact',
        url: '/contact'
    },
    {
        id: 6,
        title: 'Dashboard',
        url: '/dashboard'
    }
]
const Navbar = () => {
    const { mode } = useContext(ThemeContext);
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
    const handleClickDefaultBehavior = (e) => {
        e.preventDefault()
    }
    return (
        <div className="ud-header absolute top-0 left-0 z-40 flex w-full items-center bg-transparent">
            <div className="container">
                <div className="relative -mx-4 flex items-center justify-between">
                    <div className="w-60 max-w-full px-4">
                        <Link href="index.html" className="navbar-logo block w-full py-5">
                            {/*<img src="@/assets/images/logo/logo-white.svg" alt="logo" className="header-logo w-full" />*/}
                            <Image
                                className={`header-logo w-full ${mode === "light"?'brightness-0 invert':''} `}
                                src={Logo}
                                alt="logo"
                            />
                        </Link>
                        {/*<a href="index.html" className="navbar-logo block w-full py-5">*/}
                        {/*    <img src="assets/images/logo/logo-white.svg" alt="logo" className="header-logo w-full" />*/}
                        {/*</a>*/}
                    </div>
                    <div className="flex w-full items-center justify-between px-4">
                        <div>
                            <button id="navbarToggler" className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden">
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
                                        <a
                                            href="#home"
                                            className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
                                        >
                                            Home
                                        </a>
                                    </li>
                                    <li className="group relative">
                                        <a
                                            href="#about"
                                            className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li className="group relative">
                                        <a
                                            href="#pricing"
                                            className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                                        >
                                            Pricing
                                        </a>
                                    </li>
                                    <li className="group relative">
                                        <a
                                            href="#team"
                                            className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                                        >
                                            Team
                                        </a>
                                    </li>
                                    <li className="group relative">
                                        <a
                                            href="#contact"
                                            className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                    <li className="submenu-item group relative">
                                        <a
                                            href="#"
                                            onClick={handleClickDefaultBehavior}
                                            className="relative mx-8 flex py-2 text-base text-dark after:absolute after:right-1 after:top-1/2 after:mt-[-2px] after:h-2 after:w-2 after:-translate-y-1/2 after:rotate-45 after:border-b-2 after:border-r-2 after:border-current group-hover:text-primary lg:mr-0 lg:ml-8 lg:inline-flex lg:py-6 lg:pl-0 lg:pr-4 lg:text-white lg:after:right-0 lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                                        >
                                            Pages
                                        </a>
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
                        <div className="flex items-center">
                            {/*<DarkModeToggle />*/}
                        </div>
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
