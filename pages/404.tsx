import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from "../components/Layout";

const Error404: NextPage = () => {
    return (
        <div className="flex flex-col w-full mt-10 items-center justify-center">
            <Image width="500vw" height="500vh" src="/not_found.svg" alt="not found image" />
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-gray-800 dark:text-gray-400 text-8xl">404</h1>
                <p className="text-gray-700 dark:text-gray-500 text-xl">Not Found</p>
            </div>
        </div>
    )
}

export default Error404
