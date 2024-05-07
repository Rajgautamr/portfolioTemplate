import React from 'react'
import './project.css'
import ProjectImg from '../../assets/img/project-management-planning-development-message-box-notification-graphic.jpg'

const Projects = () => {
  return (
    <div className="pro">
      <h1>Featured Projects :</h1>
      <p>I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects</p>
      <div className='Projects'>
        <div className='project'>
          <img src={ProjectImg}></img>
          <h3>Project Name</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, voluptatem?</p>
          <div className='buttons'>
            <button class="button1">
              View Live
            </button>
            <button class="buttton2"> Github repo
            </button>
          </div>
        </div>

        <div className='project'>
          <img src={ProjectImg}></img>
          <h3>Project Name</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, voluptatem?</p>
          <div className='buttons'>
            <button class="button1">
              View Live
            </button>
            <button class="buttton2"> Github repo
            </button>
          </div>
        </div>

        <div className='project'>
          <img src={ProjectImg}></img>
          <h3>Project Name</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, voluptatem?</p>
          <div className='buttons'>
            <button class="button1">
              View Live
            </button>
            <button class="buttton2"> Github Repo
            </button>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Projects
