import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import '../css/nav.css';
import NavSpacer from './navspacer';
import {motion} from 'framer-motion';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}
function NavBar() {
    return(
        <div>
            <motion.div
            initial= "hidden"
            animate= "visible"
            variants={variants}
            transition={{ ease: "easeOut", duration: 1.5 }}
            >
                <div className="appBar">
                    <div className="navTitle">Ryley Woodland</div>
                    <div>
                        <div className="navButton"><Link className="link" to="/resume">Resume</Link></div>
                        <div className="navButton"><Link className="link" to="/projects">Projects</Link></div>             
                        <div className="navButton"><Link className="link" to="/">About</Link></div>        
                    </div>  
                </div>
            </motion.div>
            <NavSpacer/>
        </div>
        
    )
}

export default NavBar;