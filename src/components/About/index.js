import {
  faAndroid,
  faAws,
  faGitAlt,
  faJava,
  faJsSquare,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons'
import { faMobileAndroid } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setLetterClass('text-animate-hover')
  })

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              index={15}
            />
          </h1>
          <p>
            I'm very ambitious software developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I am an avid learner, always looking to explore and constantly
            working on ways to improve myself.
          </p>
          <p>
            If I was to define myself in one sentence that would be an
            idealistic person, a football fanatic <e>Man U</e>, gaming
            enthusiast and tech lover.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAndroid} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faGitAlt} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faAws} color="#FF9900" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
