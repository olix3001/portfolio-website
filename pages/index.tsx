import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
      <Layout>
    <div className="flex flex-row w-full justify-evenly items-center mt-32">

        <Head>
            <title>Oliwier Michalik | Home page</title>
        </Head>

        <div className="w-11/12 md:w-1/3 flex flex-col items-center text-center md:text-left md:items-start">
            <h1 className="text-5xl md:text-6xl text-gray-800 dark:text-gray-200 font-bold">Hi 👋 I'm Oliwier</h1>
            <p className="text-gray-500 dark:text-gray-500 text-lg md:text-xl mt-8">A passionate Full Stack developer 🚀 with an experience of building Web applications with
                React.js and backend in Node.js as well as some other cool frameworks and libraries.</p>
            <div>
                <Link href="/contact">
                    <a className="mt-8 cursor-pointer inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text- font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-100 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Contact Me
                        </span>
                    </a>
                </Link>
            </div>
        </div>
        <div className="hidden md:block">
            <Image src="/programmer.svg" width="500vw" height="500vh" />
        </div>
    </div>
      </Layout>
  )
}

export default Home
