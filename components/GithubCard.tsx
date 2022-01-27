import type { NextPage } from 'next'

interface Props {
    href: string,
    title: string,
    lang: string,
    description: string
}

const GithubCard: NextPage<Props> = ({ href, title, lang, description}) => {

    return (
        <a href={href}>
            <div className="m-2 space-y-1.5 block py-4 px-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer">
                <h5 className="text-emerald-500 dark:text-emerald-400 text-xl">{title}</h5>
                {lang!=undefined && <p className="px-2 py-1 rounded-md bg-yellow-300 dark:bg-[#2e3c4c] text-sm text-yellow-700 dark:text-[#568cb0] w-fit">{lang}</p>}
                <p className="text-gray-500 dark:text-gray-400">{description}</p>
            </div>
        </a>
    )
}

export default GithubCard
