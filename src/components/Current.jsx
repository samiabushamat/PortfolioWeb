import '../styles/Current.css'

function Current() {
    return (
        <div className="current-container">
            <h1 className="current-title"> what i am currently doing</h1>
            <div className='divider'></div>
            <a href= "https://www.sublimeapplications.tech" className ='job' target='_blank' rel='noopener noreferrer'> sublime applications</a>
            <p className='description'> my passion project where i help small businesses with technical solutions (the web app isnt finished yet ;p)</p>
            <a href= "https://www.apple.com" className='job' target='_blank' rel='noopener noreferrer'> technical specialist | apple</a>
            <p className='description'> im currently work in apple retail supporting customers with problems on their devices</p>
        </div>
    )
}

export default Current