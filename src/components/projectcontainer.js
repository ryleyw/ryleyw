import React from 'react';
import '../css/nav.css';
import {motion, AnimatePresence} from 'framer-motion';
import ProjectCard from '../components/projectcard';
import GrowToRight from '../components/growtoright';
import GrowToLeft from '../components/growtoleft';
import projects from '../data/projects';
import details from '../data/details';
import ElixirLogo from '../images/elixirlogo.png';
import EventScopeLogo from '../images/eventscopelogo.png';
import PythonLogo from '../images/pythonlogo.png';
import ReactLogo from '../images/reactlogo.png';
import VikeLabsLogo from '../images/vikelabslogo.png';

function ProjectContainer() {
    console.log(projects["eventscope"]);
    return(
            <div className="cardList">
            <GrowToRight propColor="#FFBA49" delay={0} projectData={projects["eventscope"]} projectDetails={details["eventscope"]} projectLogo={EventScopeLogo}/>
            <GrowToLeft propColor="#20A39E" delay={1} projectData={projects["lecshare"]} projectDetails={details["lecshare"]}  projectLogo={VikeLabsLogo}/>
            <GrowToRight propColor="#EF5B5B" delay={2} projectData={projects["wec2020"]} projectDetails={details["wec2020"]}  projectLogo={ReactLogo}/>
            <GrowToLeft propColor="#713E5A" delay={3} projectData={projects["emotionclassification"]} projectDetails={details["emotionclassification"]}  projectLogo={PythonLogo}/>
            </div>
    )
}

export default ProjectContainer;