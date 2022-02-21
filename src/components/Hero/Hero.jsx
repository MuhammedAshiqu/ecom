import React from 'react'
import './Hero.css'
import {Carousel} from 'react-bootstrap'

// or less ideally

function Hero() {
  return (
    <div className='hero'>
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY="
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvHsDNFMFaypKXw4HNv7UkpOEKk31TM4H1Wjx_6y_SuuOHbxkPuYPSjxTkhn160D0ObUc&usqp=CAUa"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default Hero