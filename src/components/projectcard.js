import React from 'react';
import '../css/nav.css';
import {motion} from 'framer-motion';

function ProjectCard(props) {
    

    return(
        
            <div className="projectCard" style={{backgroundColor: props.propColor}}>
                <div className="projectLogo">

                </div>
                <div className="projectInfoHeader">
                    EventScope
                </div>
                <div className="projectInfoText">
                    this is a description
                </div>
            </div>
       
    )
}

export default ProjectCard;