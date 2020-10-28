import lecshareimage from "../images/lecsharescreenshot.png";
import wecimage from "../images/wec2020screenshot.png"
var details  = {
    "eventscope": {
        "image": "",
        "paragraphs":[
            " - page in progress - ",
            "A current work in progress. For developing my tech skillset and algorithm knowledge. Base application will include graph traversal and path finding techniques, then hopefully branch into more complex algorithms."
        ],
        "github": ""
    },
    "lecshare": {
        "image": lecshareimage,
        "paragraphs":[
            "Lecshare was a project generated in an ideation session with VikeLabs: a University club aiming to create a startup environment at school, where future developers can sink their teeth into building interesting projects.",
            "I was a Team Lead for this project and was involved in the front end design and programming of the application, and the architecture design and project management of the entire application.",
            "Lecshare is a React application with typescript implementation. Lecshare aims to make lectures more accessible for students with auditory, visual, or learning impairments; and improving learning outcomes for students in lecture-based courses.",
            "Core contributors to this project include Bryce Edwards, Derek Lowlind and Aomi Jokoji. Feel free to look these cool guys up on LinkedIn!",
            "Unfortunately due to time contraints and lack of interest of professors, Lecshare has been put on hold until interest arrises again. However, you can check out a demo at https://vikelabs.github.io/lecshare/. Use course code: UVIC#ECON#416-201809#A00-vikelabs to access the content page.",
        ],
        "github": "https://github.com/VikeLabs/lecshare-main"
    },
    "wec2020": {
        "image": wecimage,
        "paragraphs":[
            "On January 22-26, 2020 I had the pleasure in competing in the 2020 Western Engineering Competition in Saskatoon in their programming category. Derek Lowlind, Malcolm Seyd and Prinay Rai and I qualified for this event by finishing in 1st place for the 2020 UVic Engineering Competition by building a real time polling application for shared audio experiences. Thankfully, because of winning the qualifier, I was able to meet many wonderful people in the field of engineering and network with industry prefessionals.",
            "My team and I were tasked with creating a financial management application from scratch, with the theme of building an application that supports community development. We reasoned that by making a simple but intuitive application, that communities could easily integrate into their lives and develop financial knowledge and management. We built the application with technologies that we were the most well versed with. A Flask API was constructed to service sample financial records and handle requests from our user interface. My role on the team was to architect the complete front-end archtecture and develop a intuitive user interface. With most of my front-end experience being in React, I used it as the framework for data sharing and state management.",
            "I worked with Malcolm and Derek to ensure that API endpoints were returning the correct data from AJAX calls and slowly but surely the application came together. Our final product included functionality to view two accounts' Savings and Chequing data, and to add transaction data through form submission, updating the data in real time.",
            "The final piece of the project was a machine learning algorithm to correctly predict stock trending patterns from historical data. Prinay Rai was assigned to this task in order to efficiently complete all sections in the 8 hour window taht was given to us.",
            "Our hard work paid off after the 8 hours, and we were awarded second place in the competition, qualifying us for the national stage at the 2020 Candian Engineering Competition in Winnipeg. I'm sure that it will be another amazing experience and can't wait to share what my team develops there."
        ],
        "github": "https://github.com/ryleyw/wec2020"
    },
    "emotionclassification": {
        "image": "",
        "paragraphs":[
            "In one of my favorite courses of my degree, Data Mining, a requirement was to use the machine learning and data classification algorithms that we were learning in class to create a project to produce results from a large set of data. Luke Rowe, Muhammad Ali and I focused our efforts on creating a emotion classification system on a set of audio clips with an underlying emotion in each.",
            "Linked below is the final report prepared for the project.",
        ],
        "github": "" 
    }
}
//multiple pargraphs listed out, seperated by br in text rendering
export default details;