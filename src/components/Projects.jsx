import '../styles/Projects.css'

function Projects() {
    return (
        <div className="projects-container">
            <h1 className="projects-title"> Some of my favorite projects</h1>
            <div className='divider'></div>
            <h1 className='job'>H&R Time</h1>
            <p className='description'> Project I made for a company that allows for user punches, saved them $1000 a year!</p>
            <a href= "https://github.com/samiabushamat/PlanItOut/blob/main/README.md" className ='job' target='_blank' rel='noopener noreferrer'> PlanItOut</a>
            <p className='description'> Group project that allows users to connect with people around them and create and join events</p>
            <a href= "https://github.com/djones59/Atelier" className='job' target='_blank' rel='noopener noreferrer'> Atelier</a>
            <p className='description'> Group web app that allows artists in chicagoland area work with each other by creating meet ups and collaborate with each other</p>
        </div>
    )
}

export default Projects