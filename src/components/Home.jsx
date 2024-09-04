import React from 'react'
import { motion } from 'framer-motion'
import HomeDeckButton from './HomeDeckButton'
import { Link } from 'react-router-dom'

const homepageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: {
      duration: .5,
      when: 'afterChildren'
    }
  }
}

const questionVariants = {
  hidden: { 
    x: '-100vw',
    opacity: 0,
    fontSize: '2.3rem',
    fontWeight: 'bold',
    marginTop: '3rem'
  },
  visible: { 
    x: '3rem', 
    opacity: 1,
    marginBottom: '50px',
    transition: { type: 'spring' }
  },
  exit: { x: '-100vw' }
}

const Home = () => {

  return (
      <motion.div className='Homepage' variants={homepageVariants} initial='hidden' animate='visible' whileHover='hover' exit='exit'>
        <motion.div 
          variants={questionVariants} 
          initial='hidden' 
          animate='visible' 
          exit='exit'
        >
          Welcome! What would you like to study?
        </motion.div>
        <Link to='/decks'>
          <HomeDeckButton />
        </Link>
      </motion.div>
  )
}

export default Home