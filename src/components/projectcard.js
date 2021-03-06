import React from 'react';
import '../css/nav.css';
import {motion} from 'framer-motion';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import pdf from '../data/seng474report.pdf'

const variants = {
    hidden: { opacity: 0},
    visible: { opacity: 1}
}

const modalVariants = {
    hidden: { opacity: 0, y: 100},
    visible: { opacity: 1, y: 0}
}

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    height: "80%",
    width: "80%",
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #FFF',
    boxShadow: theme.shadows[4],
    padding: theme.spacing(2, 8, 4),
    overflow: "scroll",
    borderRadius: "15px",
    fontFamily: 'Darker grotesque', 
    fontStyle: 'sans-serif'
  },
}));


function ProjectCard(props) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    let pdflink;
    if(props.projectData["title"]=="Emotion Classification") {
        pdflink = <div><a href={pdf} target="_blank">Here</a> is the link to the full report.</div>
    } else {
        pdflink = <div></div>
    }

    let githublink;
    if(props.projectDetails["github"]!="") {
        githublink = <div><a href={props.projectDetails["github"]} target="_blank">Github</a></div>
    } else {
        githublink = null;
    }

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    
    const paragraphs = [];

    for(const[index, paragraph] of props.projectDetails.paragraphs.entries()) {
        paragraphs.push(<p key={index}>{paragraph}<br/></p>)
    }
    return(
        <div>
        <motion.div
            whileHover={{scale: 1.05}}
            transition={{ ease: "easeOut", duration: 0.5}}
            > 
            <div className="projectCard" style={{backgroundColor: props.propColor}} onClick={handleOpen}>
                <div className="projectLogo" style={{backgroundColor: props.propColor}}>
                    <img src={props.projectLogo} className="projectImg"/>
                </div>
                <div className="projectInfoHeader">
                    {props.projectData["title"]}
                </div>
                <div className="projectInfoText">
                    {props.projectData["text"]}
                </div>
            </div>
        </motion.div>
        
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
                >
                <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ ease: "easeOut", duration: 0.2}}
                >
                <div style={modalStyle} className={classes.paper}>
                    <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={modalVariants}
                    transition={{ ease: "easeOut", duration: 0.5, delay: 0.2}}
                    >
                        <p id="simple-modal-title" className="detailsTitle">{props.projectData["title"]}</p>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={modalVariants}
                        transition={{ ease: "easeOut", duration: 0.5, delay: 0.4}}
                        >
                            <div className="detailsImage">
                                <img src={props.projectDetails.image}></img>
                            </div>
                        </motion.div> 
                    
                    <div className="detailsParagraph" >
                        
                        <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={modalVariants}
                        transition={{ ease: "easeOut", duration: 0.5, delay: 0.4}}
                        >   
                            {githublink}
                            {paragraphs}
                            {pdflink}
                        </motion.div> 
                    </div>           
                    
                </div>
                </motion.div>
            </Modal>
        
     </div>
    )
}

export default ProjectCard;