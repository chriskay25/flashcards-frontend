import React from 'react'
import { motion } from 'framer-motion'

const buttonVariants = {
    hidden: { 
        opacity: 0,
        scale: 1.1, 
        borderRadius: '20%', 
        y: '10vh',
        boxShadow: '0px 0px 50px #000',
    },
    visible: {
        opacity: 1,
        scale: 1,
        backgroundImage: 'radial-gradient(rgb(240,240,128), rgb(240,128,128))',
        boxShadow: '0px 0px 15px #000',
        transition: {
            delay: .8,
            type: 'spring', 
            stiffness: 100,
            damping: 14,
            mass: 5,
        }
    },
    hover: { 
        scale: 1.1,
        backgroundImage: 'radial-gradient(rgb(240,128,128), rgb(240,240,128))',
        boxShadow: '0px 0px 35px #000',
        transition: { 
            type: 'spring',
            stiffness: 100,
            damping: 14,
            mass: 3,
        }
    },
    tap: {
        scale: 1,
        backgroundImage: 'radial-gradient(rgb(240,240,128), rgb(240,128,128))',
        boxShadow: '0px 0px 10px #000',
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 5,
            mass: 1
        }
    },
    exit: {
        x: '-100vw',
        transition: { type: 'spring' }
    }
  }

const HomeDeckButton = () => (
    <motion.div className='home-deck-bttn'
        initial='hidden'
        animate='visible'
        whileHover='hover'
        whileTap='tap'
        exit='exit'
        variants={buttonVariants}
    >
        Decks
    </motion.div>
)

export default HomeDeckButton