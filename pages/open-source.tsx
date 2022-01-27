import type { NextPage } from 'next'
import Layout from "../components/Layout"
import GithubCard from "../components/GithubCard";
import {Key, useEffect, useState} from "react";
import axios from 'axios';

const OpenSource: NextPage = () => {

    const [projects, setProjects] = useState<any>([])

    useEffect(() => {
        axios.get('https://api.github.com/users/olix3001/repos').then(d => {
            const data = d.data;
            const temp = [];
            for (let project of data) {
                temp.push({
                    title: project.full_name,
                    lang: project.language,
                    desc: project.description,
                    href: project.html_url
                })
            }
            setProjects(temp);
        });
    }, [])

    return (
        <Layout>
            <div className="w-full flex flex-col items-center justify-center">
                <div className="m-10 text-center">
                    <h1 className="text-gray-700 dark:text-gray-300 font-bold text-4xl">Open Source</h1>
                    <p className="text-gray-500 text-lg mt-2">I ❤️ open source projects, and every somewhat successful
                        project that I made to this point is open source.</p>
                </div>
                <div className="flex flex-row flex-wrap w-3/4 justify-center">
                    {/* Loader */}
                    {projects.length == 0 &&
                        <svg className="animate-spin -ml-1 mr-3 h-16 w-16 text-white" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                        </svg>}
                    {/* Projects*/}
                    {projects.map((pr: any) => <GithubCard title={pr.title} href={pr.href} lang={pr.lang} description={pr.desc || "No Description"} key={pr.title}/>)}
                </div>
            </div>
        </Layout>
    )
}

export default OpenSource
