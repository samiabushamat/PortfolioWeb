import '../styles/Projects.css'

function Projects() {
    return (
        <div className="projects-container">
            <h1 className="projects-title"> Some of my favorite projects</h1>
            <div className='divider'></div>
            <a href= "https://steam-review-randomizer.web.app/" className ='job' target='_blank' rel='noopener noreferrer'> Steam Reviews</a>
            <p className='description'> Project I made for fun that allows you to find random reviews of steam games!</p>
            <a href= "https://www.sublimeapplications.tech" className ='job' target='_blank' rel='noopener noreferrer'> H&RTime</a>
            <p className='description'> Project I made for fun that allows you to find random reviews of steam games!</p>
            <a href= "https://github.com/samiabushamat/PlanItOut/blob/main/README.md" className ='job' target='_blank' rel='noopener noreferrer'> PlanItOut</a>
            <p className='description'> Group project that allows users to connect with people around them and create and join events</p>
            <a href= "https://github.com/djones59/Atelier" className='job' target='_blank' rel='noopener noreferrer'> Atelier</a>
            <p className='description'> Group web app that allows artists in chicagoland area work with each other by creating meet ups and collaborate with each other</p>
        </div>
    )
}

export default Projects