import React from 'react';
import '../css/nav.css';
import {motion} from 'framer-motion';
import toon from '../images/toon.png';
import BodyText from '../components/bodytext';
import CarouselPage from '../components/slides'
const variants = {
    hidden: { opacity: 0, scale: 0},
    visible: { opacity: 1, scale: 1},
}

const variantsY = {
    hidden: { opacity: 0, y: 500 },
    visible: { opacity: 1, y: 0},
}

function AboutContainer() {
    

    return(
        <div>
            <div className="aboutContainer">
                <motion.div
                initial= "hidden"
                animate= "visible"
                variants={variants}
                transition={{ ease: "easeOut", duration: 1.2 }}
                >
                    <div className="aboutImage">
                        <img id="aboutImage" src={toon}></img>
                    </div>
                </motion.div>
                <motion.div
                initial="hidden"
                animate="visible"
                variants={variantsY}
                transition={{ ease: "easeOut", duration: 1.2 }}
                >
                    <BodyText/>
                </motion.div>
            </div>  
        </div>
    )
}

export default AboutContainer;