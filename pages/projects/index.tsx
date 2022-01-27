import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from "../../components/Layout";
import Image from "next/image";

const Projects: NextPage = () => {
    return (
        <Layout>
        <div className="flex flex-wrap justify-evenly items-center mt-10">

            <Head>
                <title>Oliwier Michalik | Projects</title>
            </Head>

            {/* Search bar */}
            <div className="relative mt-1 w-3/4 md:w-1/2">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-gray-700 dark:text-gray-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                </div>
                <input type="text"
                       className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Search for projects" />
            </div>

            {/* No Projects */}
            <div className="flex flex-col w-full mt-16 items-center justify-center mx-5">
                <Image width="350vw" height="350vh" src="/empty.svg" alt="not found image" />
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="text-gray-800 dark:text-gray-400 text-6xl mt-5">No Projects</h1>
                    <p className="text-gray-700 dark:text-gray-500 text-2xl mt-2">I&apos;m still working on putting my projects here.<br/>
                        To see my projects now:<br/>
                        <a href="https://github.com/olix3001?tab=repositories" className="text-emerald-500 cursor-pointer">Check out my github</a></p>
                </div>
            </div>
        </div>
        </Layout>
    )
}

export default Projects
