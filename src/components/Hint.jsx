import React from 'react'
import { motion } from 'framer-motion'

const Hint = ({ hint, open }) => {
    return (
        <motion.div layout initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: .5}}>
            HINT: { hint ? hint : ''}
        </motion.div>
    )
}

export default Hint