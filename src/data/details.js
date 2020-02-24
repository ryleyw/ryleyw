import lecshareimage from "../images/lecsharescreenshot.png";
import wecimage from "../images/wec2020screenshot.png"
var details  = {
    "eventscope": {
        "image": "",
        "paragraphs":[
            "A current work in progress, i wanted to design a better way for discovering local events in your area. I found many listings are simply in list format which are a pain to browse through and may make the user give up when something does not catch their eye within a certain time. In order to retain users and for them to discover more events, I wanted to create a system which encourages a great user experience. Using event data from Google's listings, the data is then translated into the User Interface to be found by the user.",
            "Above is a small mockup of what I envision the finsihed product to look like. Events in close on the UI will be grouped, and as you zoom in on the map, the groups get more defined until you have events listed by vemue. this project will be primarily undertaken in React with the Redux library to promote organizaiton and best practices.",
            "Stay tuned for more developments on this project!"
        ] 
    },
    "lecshare": {
        "image": lecshareimage,
        "paragraphs":[
            "Lecshare was a project generated in an ideation session with VikeLabs: a University club aiming to create a startup environment at school, where future developers can sink their teeth into building interesting projects.",
            "Lecshare is a React application with typescript implementation. Lecshare aims to make lectures more accessible for students with auditory, visual, or learning impairments; and improving learning outcomes for students in lecture-based courses. I was assigned as a team leader to the project, and together Derek Lowlind and Bryce Edwards, designed the architecture and outlined the long term goals of the system. Development of the initial front-end prototype was led by myself, where I honed my skills in React to create a dynamic interface to link word highlighting and audio.",
            "Currently Lecshare is being upgraded to support multiple lecture access per course, with hopes for a live testing round in the Fall of 2020. Any updates will be posted here, but feel free to check out the github repo for more frequent additions.",
            "Core contributors to this project include Bryce Edwards, Derek Lowlind and Aomi Jokoji. Feel free to look these cool guys up on LinkedIn!",
            "Finally, check out the project at https://vikelabs.github.io/lecshare-main. There's some testing with a login page currently, use username: admin and password: admin to view the main page!"
        ] 
    },
    "wec2020": {
        "image": wecimage,
        "paragraphs":[
            "On January 22-26, 2020 I had the pleasure in competing in the 2020 Western Engineering Competition in Saskatoon in their programming category. Derek Lowlind, Malcolm Seyd and Prinay Rai and I qualified for this event by finishing in 1st place for the 2020 UVic Engineering Competition by building a real time polling application for shared audio experiences. Thankfully, because of winning the qualifier, I was able to meet many wonderful people in the field of engineering and network with industry prefessionals.",
            "My team and I were tasked with creating a financial management application from scratch, with the theme of building an application that supports community development. We reasoned that by making a simple but intuitive application, that communities could easily integrate into their lives and develop financial knowledge and management. We built the application with technologies that we were the most well versed with. A Flask API was constructed to service sample financial records and handle requests from our user interface. My role on the team was to architect the complete front-end archtecture and develop a intuitive user interface. With most of my front-end experience being in React, I used it as the framework for data sharing and state management.",
            "I worked with Malcolm and Derek to ensure that API endpoints were returning the correct data from AJAX calls and slowly but surely the application came together. Our final product included functionality to view two accounts' Savings and Chequing data, and to add transaction data through form submission, updating the data in real time.",
            "The final piece of the project was a machine learning algorithm to correctly predict stock trending patterns from historical data. Prinay Rai was assigned to this task in order to efficiently complete all sections in the 8 hour window taht was given to us.",
            "Our hard work paid off after the 8 hours, and we were awarded second place in the competition, qualifying us for the national stage at the 2020 Candian Engineering Competition in Winnipeg. I'm sure that it will be another amazing experience and can't wait to share what my team develops there.",
            "To see the project, check out the repository at https://github.com/ryleyw/wec2020."
        ] 
    },
    "emotionclassification": {
        "image": "",
        "paragraphs":[
            "In one of my favorite courses of my degree, Data Mining, a requirement was to use the machine learning and data classification algorithms that we were learning in class to create a project to produce results from a large set of data. Luke Rowe, Muhammad Ali and I focused our efforts on creating a emotion classification system on a set of audio clips with an underlying emotion in each.",
            "Linked below is the final report prepared for the project. In summary, ",
        ] 
    },
    "harmony": {
        "image": "",
        "paragraphs":[
            "This project was my first experience building a web application. Stemming from a simple idea with a friend to create a small, personalized party game akin to Piccolo, I was able to create my first React front-end, an API using the Phoenix framework, and setup a PostgresSQL server to gather data for prompts.",
            "The basic idea of the game was to create prompts with an inputted list of names, and generate prompts based on those names. The project was a good exercise in setting up end to end communicaton and string recognition."
        ] 
    }
}
//multiple pargraphs listed out, seperated by br in text rendering
export default details;