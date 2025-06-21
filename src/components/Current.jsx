import '../styles/Current.css'

function Current() {
    return (
        <div className="current-container">
            <h1 className="current-title"> What I am currently doing</h1>
            <div className='divider'></div>
            <a href= "https://samiabushamat.com" className ='job' target='_blank' rel='noopener noreferrer'> Independant Software Engineer</a>
            <p className='description'>I currently do projects for people who have ideas and need help getting them through the programming space</p>
            <a href= "https://www.apple.com" className='job' target='_blank' rel='noopener noreferrer'> Technical Specialist | Apple</a>
            <p className='description'> I'm currently working in Apple retail supporting customers with problems on their devices, solving their problems</p>
        </div>
    )
}

export default Current