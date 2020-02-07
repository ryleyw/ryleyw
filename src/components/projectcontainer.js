import React from 'react';
import '../css/nav.css';
import {motion, AnimatePresence} from 'framer-motion';
import ProjectCard from '../components/projectcard';
import GrowToRight from '../components/growtoright';
import GrowToLeft from '../components/growtoleft';

function ProjectContainer() {
    return(
            <div className="cardList">
            <GrowToRight propColor="#FFBA49" delay={0}>
                <ProjectCard />     
            </GrowToRight>
            <GrowToLeft propColor="#20A39E" delay={1}/>
            <GrowToRight propColor="#EF5B5B" delay={2}/>
            <GrowToLeft propColor="#713E5A" delay={3}/>
            <GrowToRight propColor="#63A375" delay={4}/>
            
                      
            </div>
    )
}

export default ProjectContainer;