import type { NextPage } from 'next'
import Link from 'next/link'
import NavigationLink from "./NavigationLink";
import {useEffect, useState} from "react";

const Navbar: NextPage = () => {

    const [isDark, setDark] = useState(true);

    const switchTheme = () => {
        setDark(!isDark)
        localStorage.setItem('color-theme', isDark ? 'light' : 'dark');
        if (!isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    useEffect(() => {
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setDark(true);
        } else {
            setDark(false);
        }
    }, []);

    const [isMobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="bg-gray-100 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 pt-5">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                {/* Logo */}
                <Link href="/">
                    <a className="flex">
                        <p className="text-emerald-600 dark:text-emerald-400 text-xl"><span className="text-gray-400 mr-2">&lt;</span>Oliwier Michalik<span className="text-gray-400 ml-2">/&gt;</span></p>
                    </a>
                </Link>


                {/* Dark / Light mode switch*/}
                <div className="flex md:order-2">
                    <button type="button"
                            className="text-gray-600 dark:text-gray-100 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:hover:bg-gray-700"
                            onClick={switchTheme}>
                        <svg className="w-5 h-5" fill="currentColor"
                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            {!isDark ? <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/> : <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd" />}
                        </svg>
                    </button>
                </div>

                {/* Mobile menu button */}
                <button type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-2" aria-expanded="false" onClick={()=>setMobileOpen(!isMobileOpen)}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
    clipRule="evenodd"/>
                    </svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    clipRule="evenodd"/>
                    </svg>
                </button>

                {/* Menu */}
                <div className={`${isMobileOpen?"":"hidden "}w-full md:block md:w-auto`}>
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:font-medium">
                        <li>
                            <NavigationLink href="/">Home</NavigationLink>
                        </li>
                        <li>
                            <NavigationLink href="/skills">Skills</NavigationLink>
                        </li>
                        <li>
                            <NavigationLink href="/projects">Projects</NavigationLink>
                        </li>
                        <li>
                            <NavigationLink href="/open-source">Open Source</NavigationLink>
                        </li>
                        <li>
                            <NavigationLink href="/contact">Contact Me</NavigationLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
