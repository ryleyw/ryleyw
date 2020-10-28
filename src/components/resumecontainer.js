import React from 'react';
import '../css/resume.css';
import {motion} from 'framer-motion';

const variants = {
    hidden: { opacity: 0, scale: 0},
    visible: { opacity: 1, scale: 1},
}

const variantsY = {
    hidden: { opacity: 0},
    visible: { opacity: 1},
}

function ResumeContainer() {
    

    return(
        <motion.div
                initial= "hidden"
                animate= "visible"
                variants={variantsY}
                transition={{ ease: "easeOut", duration: 1.5 }}
                >
        <div className="resumeContainer">
            
            <div className="resumeTitle">Resume / CV</div>
            
            <div><a href="https://github.com/ryleyw" style={{float: 'left'}}>GitHub</a></div>
            <div style={{float: 'left'}}>&nbsp;&nbsp;&nbsp;</div>
            <div><a href="https://www.linkedin.com/in/woodlandr/">LinkedIn</a></div>
            <div className="resumeSectionHeader">Education</div>
            <div className="sectionContainer">
                <div className="resumeSubHeader">University of Victoria&nbsp;</div>
                <div className="resumeSectionInfo"> | Bachelor of Science | Major: Computer Science, Minor: Business | Graduation - Spring 2021</div>
                <ul className="resumeText">
                    <li>Favorite courses include: Data Mining (SENG 474), Object Oriented Design (SENG 330), Human Computer Interaction (SENG 321), Algorithms and Data Structure I/II (CSC 225/226), Spectroscopy (CHEM 213), and Operating Systems (CSC 360).</li>
                </ul>
                <div className="resumeSubHeader">Mount Doug HS&nbsp;</div>
                <div className="resumeSectionInfo"> | Challenge Program - Honor Roll | 09/2010 - 06/2014</div>
                <ul className="resumeText">
                    <li>Accepted into challenge program out of Arbutus Middle School's French Immersion program.</li>
                </ul>
            </div>
            
            <div className="resumeSectionHeader">Skills</div>
            <div className="sectionContainer">
                <div className="resumeSubHeader">Technical Skills&nbsp;</div>
                <div className="resumeSectionInfo">&nbsp;</div>
                <ul className="resumeText">
                    <li>Javascript | Python | Java | C# | HTML | CSS | Typescript | React | Vue | Node.js | Flask | Git | Linux </li>
                </ul>
                <div className="resumeSubHeader">Soft Skills&nbsp;</div>
                <div className="resumeSectionInfo">&nbsp;</div>
                <ul className="resumeText">
                    <li>Problem Solver | Communicator | Leader | Collaborator | Team player | Creator </li>
                </ul>
            </div>

            <div className="resumeSectionHeader">Work Experience</div>
            <div className="sectionContainer">
            <div className="resumeSubHeader">Software Development Co-op, Level 1&nbsp;</div>
                <div className="resumeSectionInfo"> | BC Dev Exchange | 05/2020 - 09/2020</div>
                <ul className="resumeText">
                    <li>Development of client facing features in React.</li>
                    <li>Communication and coordination in a remote agile setting to deliver solutions alongside a multi-disciplinary team of developers.</li>
                    <li>Ownership of my own work and independent problem solving developing features.</li>
                    <li>Implemented linting and web analytic frameworks to improve front-end infrastructure.</li>
                </ul>
                <div className="resumeSubHeader">Web Developer&nbsp;</div>
                <div className="resumeSectionInfo"> | BC Ministry of Citizens' Services | 05/2019 - 12/2019</div>
                <ul className="resumeText">
                    <li>Development of client facing features in Vue.js, state management using Vuex. REST communication development to gather correct resources from massive amounts of datasets.</li>
                    <li>Performance improvements with Vue lazy loading and Webpack importing optimization to reduce page load times by up to 5 seconds.</li>
                    <li>Development in Javascript and Python API endpoints in Node.js and Flask for the BC Data Catalogue. Additions included developing a notification service to alert users on dataset additions and changes in real time using Webhooks.</li>
                    <li>Development experience in Java upgrading backend of password resetting service.</li>
                    <li>Developed understanding of Docker container deployment and Kubernetes cluster management through Openshift.</li>
                    <li>Wrote Python scripts to autmate databse querying and mass data tranfers between databases.</li>
                    <li>Wrote automated test scripts in Selenium and JUnit for CI/CD pipeline.</li>
                </ul>
                <div className="resumeSubHeader">Technical Co-op&nbsp;</div>
                <div className="resumeSectionInfo"> | LlamaZOO Interactive | 09/2018 - 12/2018</div>
                <ul className="resumeText">
                    <li>Object-oriented development experience in C# creating editing tools for 3D Artists for Unity development. Used .NET framework and Unity libraries to create tools such as a UI custamization tool, allowing grouping of UI elements on simple clicks to change their properties.</li>
                    <li>Using ARCGis libraries, developed a python program to compile and send clients' map features to LlamaZOO's servers to be rendered in 3D. Communication facilitated with Python's requests library.</li>
                    <li>Fast paced development environment, practiced time management and estimation to inform supervisors when work would be completed.</li>
                    <li>Ensured the quality of research, project design and code by instigating and planning project proposal meetings and code reviews with mentors.</li>
                </ul>

                <div className="resumeSubHeader">Assistant Researcher&nbsp;</div>
                <div className="resumeSectionInfo"> | UVic Proteomics Lab | 05/2017 - 09/2017</div>
                <ul className="resumeText">
                    <li>Research experience developing methodologies to optimally extract specific replicated proteins from bacteria strains.</li>
                    <li>Intensive documentation experience tracking each stage of the experiment process.</li>
                </ul>

                <div className="resumeSubHeader">Lifeguard / Swim instructor&nbsp;</div>
                <div className="resumeSectionInfo"> | Gordon Head Recreation | 05/2014 - 05/2019</div>
                <ul className="resumeText">
                    <li>Teamwork and collaboration skills developing lesson plans alongside other instructors for dozens of students per session.</li>
                    <li>Teamwork required in high pressure situations to rescue patrons or diffuse dangerous situations.</li>
                </ul>

            </div>
            
            <div className="resumeSectionHeader">Clubs and Competitions</div>
            <div className="sectionContainer">
                <div className="resumeSubHeader">VikeLabs&nbsp;</div>
                <div className="resumeSectionInfo"> | University of Victoria | 09/2019 - Present</div>
                <ul className="resumeText">
                    <li>Team lead for development of Lecshare (see projects). Duties include conceptualization and categorization of new features into tickets, assigning and managing tickets based on developer's skill level and area of expertise, and offering guidance and knowledge on web application development to newer developers.</li>
                    <li>Technical responsibilities primarily React development and conceptualizaiton of architecture and data storage.</li>
                </ul>
                <div className="resumeSubHeader">WEC 2020&nbsp;</div>
                <div className="resumeSectionInfo">| University of Saskatoon | 01/2020</div>
                <ul className="resumeText">
                    <li>Achieved 2nd place at the 2020 Western Engineering Competition in Saskatoon out of 8 teams, qualifying for the national competition in March.</li>
                    <li>Built the application seen in Projects page, requiring fast paced communication and collaboration with our team of 4.</li>
                </ul>
                <div className="resumeSubHeader">UVEC 2019&nbsp;</div>
                <div className="resumeSectionInfo">| University of Victoria | 11/2019</div>
                <ul className="resumeText">
                    <li>Achieved 1st place in the UVic Engineering competition, qualifying for WEC with my team.</li>
                    <li>Built a real time HTTP polling application to display data updates in real-time.</li>
                </ul>
            </div>
            <br></br>
            <br></br>
        </div>
        </motion.div>
        
       
    )
}

export default ResumeContainer;