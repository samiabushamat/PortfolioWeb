function Hero() {
  return (
    <div style={styles.container}>
      <div>
        <h1 style={styles.name}>Sami Abushamat</h1>
        <div style={styles.socials}>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:youremail@example.com">Email</a>
        </div>
      </div>
    </div>
  );
}


const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#000000',  // fixed hex code for black
    borderRadius: '12px',
    border: '1px solid #fff',
    textAlign: 'center',
    maxWidth: '700px',           // wider for rectangular shape
    margin: '40px auto',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    flexDirection: 'row',        // horizontal layout
    justifyContent: 'center',
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  name: {
    marginBottom: '10px',
    fontSize: '24px',
    color: '#fff',
  },
  socials: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    color: '#fff',
  },
};

export default Hero
