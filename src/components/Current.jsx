import '../styles/Current.css'

function Current() {
    return (
        <div className="current-container">
            <h1 className="current-title"> What I am currently doing</h1>
            <div className='divider'></div>
            <a href= "https://www.sublimeapplications.tech" className ='job' target='_blank' rel='noopener noreferrer'> Sublime Applications</a>
            <p className='description'> My freelance "business" where I help small businesses with technical solutions. (the web app isnt finished yet ;p)</p>
            <a href= "https://www.apple.com" className='job' target='_blank' rel='noopener noreferrer'> Technical Specialist | Apple</a>
            <p className='description'> I'm currently working in Apple retail supporting customers with problems on their devices</p>
        </div>
    )
}

export default Current