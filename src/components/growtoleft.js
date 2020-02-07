import React, { useState } from 'react';
import '../css/nav.css';
import {motion} from 'framer-motion';
import ProjectCard from './projectcard';

const variants = {
    hidden: { x: "100%", scaleX: 0 },
    visible: { x: 0, scaleX: 1 }
}

const infoVariants = {
    hidden: {y: 100, opacity: 0},
    visible: {y: 0, opacity: 1}
}

function GrowtoLeft(props) {
    return(
        <motion.div
            initial="hidden"    
            animate="visible"
            variants={variants}
            transition={{ ease: "easeOut", duration: 1, delay: (props.delay / 2) }}
        >
            <div className="projectLeftSpacer projectSpacer" style={{backgroundColor: props.propColor}}>
                <motion.div
                initial="hidden"
                animate="visible"
                variants={infoVariants}
                transition={{ ease: "easeOut", duration: 1, delay: (props.delay / 2 + 1)}}
                >
                    <ProjectCard infoSource={props.infoSource} propColor={props.propColor}/>
                </motion.div>
                
            </div>
        </motion.div>       
    )
}

export default GrowtoLeft;