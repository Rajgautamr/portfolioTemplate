import React from 'react'
import './skills.css'
import ruler from '../../assets/img/ruler-pen-svgrepo-com.svg'
import code from '../../assets/img/code.svg'
import android from '../../assets/img/android.svg'
import python from '../../assets/img/python-svg.svg'

const Skills = () => {
  return (
    <div classNameName='skills'>
      <div className="cards">
        <div className="card">
          <img src={ruler}></img>
          <h2>UI & UX <br></br>Designing</h2>
        </div>
        <div className="card">
        <img src={code}></img>
          <h2>Web <br></br>Development</h2>
        </div>
        <div className="card">
        <img src={android}></img>
          <h2>Android <br></br>Development</h2>
        </div>
        <div className="card">
        <img src={python}></img>
          <h2>Machine <br></br>Learning</h2>
        </div>
      </div>
    </div>
    
  )
}

export default Skills
