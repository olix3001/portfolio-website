import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from "../components/Layout"
import Head from "next/head";

const Contact: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Oliwier Michalik | Contact</title>
            </Head>

            <div className="flex flex-row justify-evenly items-center mt-24">
                <div
                    className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-4">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Contact</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Email: olix3001@gmail.com<br/>
                        Discord: olix3001#0075<br/>
                        Github: olix3001<br/>

                    </p>
                    <div
                        className="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
                        role="alert">
                        <span className="font-bold">Info!</span> I&apos;m not currently looking for any kind of work, this site is made just from passion
                    </div>
                </div>

                <div className="hidden md:block">
                    <Image src="/contact.svg" width="500vw" height="500vh" />
                </div>
            </div>
        </Layout>
    )
}

export default Contact
