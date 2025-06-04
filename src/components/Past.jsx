import '../styles/Past.css'

function Past() {
    return (
        <div className="past-container">
            <h1 className="past-title"> what ive done</h1>
            <div className='divider'></div>
            <a href= "https://cs.uic.edu/" className='job' target='_blank' rel='noopener noreferrer'> bachelor of science in cs | uic </a>
            <p className='description'> just finished my degree from the unvirsity of illinois at chicago</p>
            <a href= "https://www.passivepossibility.com/" className ='job' target='_blank' rel='noopener noreferrer'> software engineer intern | passivepossibility</a>
            <p className='description'> worked and did some backend work last summer helping users keep track of their properties</p>
        </div>
    )
}
export default Past