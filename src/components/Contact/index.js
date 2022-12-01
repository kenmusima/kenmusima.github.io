import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailJs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    return setLetterClass('text-animate-hover')
  })

  const sendEmail = (e) => {
    e.preventDefault()
    emailJs
      .sendForm(
        'service_b3a18we',
        'template_fahiqsd',
        refForm.current,
        'PjHVp8lmzTStk6bN5'
      )
      .then(
        () => {
          alert('Message successfuly sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              index={15}
            />
          </h1>
          <p>
            My experiences are providing IT support, continuous development of
            modules in management software. Previous project worked on was
            building lead management system which include SMS and email
            automation, kanban. Technologies used were
            React,Nodejs,Express,MongoDB. Currently open for opportunities in
            Android developement (Kotlin/Java) or IT Support
          </p>
          <div className="contact-form" onSubmit={sendEmail}>
            <form ref={refForm}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Kennedy Sitati,
          <br />
          Nairobi,
          <br />
          Kenya
          <br />
          <span>ksmusima@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[-1.2610738701068418, 36.8714003160856]}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-1.2610738701068418, 36.8714003160856]}>
              <Popup>Sitati live around here :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
