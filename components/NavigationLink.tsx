import type { NextPage } from 'next'
import Link from 'next/link'
import {useRouter} from "next/router";

interface Props {
    href: string
}

const NavigationLink: NextPage<Props> = ({ children, href }) => {

    const { asPath } = useRouter();

    return (
        <Link href={href}>
            <a className={asPath == href ? "block py-2 pr-4 pl-3 text-white text-center bg-emerald-600 dark:bg-emerald-400 rounded dark:md:bg-transparent md:bg-transparent md:text-emerald-600 dark:md:text-emerald-400 md:p-0 dark:text-white" : "block py-2 pr-4 pl-3 text-center text-gray-700 border-b border-gray-300 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}>
                { children }
            </a>
        </Link>
    )
}

export default NavigationLink
