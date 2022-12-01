import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setLetterClass('text-animate-hover')
  })

  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              index={15}
            />
          </h1>
          <div>
            <ul className="portfolio-ul">
              <li>
                <a
                  href="https://github.com/kenmusima/Cinema"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>Cinema App (Android)</h2>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/kenmusima/Deploying-a-High-Availability-Web-App-using-CloudFormation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>Deploying a High Availability Web App (DevOps)</h2>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/kenmusima/Deploy-Static-Website-on-AWS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>Deploying a Static Website in AWS (DevOps)</h2>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
