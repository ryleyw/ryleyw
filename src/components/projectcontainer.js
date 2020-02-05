import React from 'react';
import '../css/nav.css';
import {motion} from 'framer-motion';
import ProjectCard from '../components/projectcard';



function ProjectContainer() {
    

    return(
        <div className="cardList">
                <ProjectCard />           
        </div>
    )
}

export default ProjectContainer;