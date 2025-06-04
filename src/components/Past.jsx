import '../styles/Past.css'

function Past() {
    return (
        <div className="past-container">
            <h1 className="past-title"> What I have done</h1>
            <div className='divider'></div>
            <a href= "https://cs.uic.edu/" className='job' target='_blank' rel='noopener noreferrer'> Bachelor of Science in CS | UIC </a>
            <p className='description'> I just finished my degree from the University of Illinois at Chicago</p>
            <a href= "https://www.passivepossibility.com/" className ='job' target='_blank' rel='noopener noreferrer'> Software Engineer Intern | PassivePossibility</a>
            <p className='description'> I worked and did some backend work last summer helping users keep track of their properties</p>
        </div>
    )
}
export default Past