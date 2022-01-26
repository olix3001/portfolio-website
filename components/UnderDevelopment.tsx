import type { NextPage } from 'next'
import Head from 'next/head'
import Image from "next/image";

interface Props {
    title: string
}

const UnderDevelopment: NextPage<Props> = ({ children, title }) => {
    return (
        <div className="flex flex-col w-full mt-10 items-center justify-center">

            <Head>
                <title>Oliwier Michalik | {title}</title>
            </Head>

            <Image width="500vw" height="500vh" src="/under_development.svg" alt="under development image" />
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-gray-800 dark:text-gray-400 text-3xl md:text-6xl">🛠️ Under Development 🛠️</h1>
                <p className="text-gray-700 dark:text-gray-500 text-xl text-center">This part of the website is still under development<br/>please come back later</p>
            </div>
        </div>
    )
}

export default UnderDevelopment
