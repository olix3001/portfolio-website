import {motion} from "framer-motion";

import type { NextPage } from 'next'

const Layout: NextPage = ({ children }) => {

    const variants = {
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    }

    return (
        <div>
            <motion.main
                variants={variants}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{type: 'linear'}}>
                { children }
            </motion.main>
        </div>
    )
}

export default Layout
