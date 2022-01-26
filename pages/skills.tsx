import type { NextPage } from 'next'
import Head from 'next/head'
import SkillCard from "../components/SkillCard";
import Layout from "../components/Layout";

const Skills: NextPage = () => {
    return (
        <Layout>
        <div className="flex flex-wrap justify-evenly items-center mt-10">

            <Head>
                <title>Oliwier Michalik | Skills</title>
            </Head>

            <SkillCard image="/technologies/nextjs" hasDarkImage={true} title="Next.js Framework" link="nextjs">
                I know next.js and react frameworks for web development (This site is made with next 😎).
            </SkillCard>
            <SkillCard image="/technologies/backend" hasDarkImage={false} title="Backend Technologies" link="backend">
                My passion is creating backend services and API's, I know many technologies which relate to this topic.
            </SkillCard>
            <SkillCard image="/technologies/static" hasDarkImage={false} title="Static Websites" link="static">
                I also know how to make one page static websites 🙄. But I don't recommend doing this these days.
            </SkillCard>
            <SkillCard image="/technologies/crypto" hasDarkImage={true} title="Blockchain Technologies" link="blockchain">
                I'm interested in blockchain technologies like cryptocurrencies and nft's. I've never actually created one myself, but I know how they work.
            </SkillCard>
            <SkillCard image="/technologies/git" hasDarkImage={true} title="Git Version Control">
                I work with git version control command line tool and I know how to use It quick and without causing any problems.
            </SkillCard>
            <SkillCard image="/technologies/logic" hasDarkImage={false} title="Algorithms and Logic">
                I know something about algorithms and I always think logically which helps me to find solutions to the problems a lot quicker.
            </SkillCard>
        </div>
        </Layout>
    )
}

export default Skills
