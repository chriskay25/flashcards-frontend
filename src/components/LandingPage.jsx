import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const LandingPage = () => {
    return (
        <motion.div className='landing-page' animate={{opacity: 1}} transition={{duration: .2}}>
            <Link to='/login'>Log In</Link>
            <Link to='/signup'>Sign Up</Link>
        </motion.div>
    )
}

export default LandingPage

