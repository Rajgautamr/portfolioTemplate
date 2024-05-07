import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='contactme'>
      <div class="container1">
        <div class="column3">
        
            <h2>Contact Us</h2>
            <p>This is the content of the first column.</p>
        </div>
        <div class="column2">

        <div class="form-container">
      <form class="form">
        <div class="form-group">
          <label for="email">Company Email</label>
          <input type="text" id="email" name="email" required=""></input>
        </div>
        <div class="form-group">
          <label for="textarea">How Can We Help You?</label>
          <textarea name="textarea" id="textarea" rows="10" cols="50" required="">          </textarea>
        </div>
        <button class="form-submit-btn" type="submit">Submit</button>
        
        

      </form>
    </div>
        </div>
    </div>
    </div>
  )
}

export default Contact
