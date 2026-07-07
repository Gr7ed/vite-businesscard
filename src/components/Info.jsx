import suhailImage from '../assets/suhail.jpg'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Info() {
  return (
    <section className="info">
        <div className="info-image">
            <img src={suhailImage} alt="Suhail Khalil" />
        </div>
        <div className="info-details">
            <h1>Suhail Khalil</h1>
            <h2>Full Stack Developer</h2>
            <a href="mailto:suhail14217@gmail.com">suhail14217@gmail.com</a>
        </div>
        <div className="info-buttons">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/suhail-khalil/">
                <FaLinkedin /> LinkedIn
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Gr7ed">
                <FaGithub /> GitHub
            </a>
        </div>
    </section>
  )
}

export default Info
