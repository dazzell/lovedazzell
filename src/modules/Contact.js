import React, {useState} from 'react'
import '../css/contact.css'

export default function Contact() {

  const[name,setName]= useState('')


  const handleChange =(event)=>{
    setName(event.target.value);
  }


  

  return (
    <div className="my-4 container">
      <h4 className="theme-color text-center font-style">GET <span className='text-light'>IN </span> TOUCH</h4>
      <div className="row">

          <div className="col-md-4 py-3 ">
            <h2 className="text-light" data-aos="slide-up" data-aos-duration="400" >DON'T BE SHY!</h2>
            <p className="text-light" style={{fontSize:'15px'}} data-aos="slide-up" data-aos-duration="700" >feel free to get in touch with me. i am always ready to discuss new projects, creative ideas or opportunities to bs part of your visions.</p>
            <div className='theme-color' data-aos="slide-up" data-aos-duration="1000"  >
              <img  className='icon-size' src={require('../assets/images/social/mail.png')} alt="" /> 
              <span className='mx-2'style={{fontSize:'15px'}} >lovepreetdazzell@gmail.com</span>
            </div>
            <div className='pt-5' data-aos="slide-up" data-aos-duration="1300" >
              <span><img  className='icon-size' src={require('../assets/images/social/fb.png')} alt="" /></span>
              <span><img  className='icon-size mx-2' src={require('../assets/images/social/ig.png')} alt="" /></span>
              <span><img  className='icon-size' src={require('../assets/images/social/snap.png')} alt="" /></span>
              </div>

          </div>


          <div className="col-md-8 justify-content-center py-3 ">
            <div className="row">

              <div className="col-sm text-center my-2" data-aos="slide-up" data-aos-duration="400">
              <input className='contact-input w-100 text-light'  value={name}  onChange={handleChange}  type="text"  placeholder='YOUR NAME' />
              </div>

              <div className="col-sm text-center my-2" data-aos="slide-up" data-aos-duration="400">
              <input  className='contact-input w-100 text-light' type='email'  placeholder='YOUR EMAIL' />
              </div>

             <div className="col-12 my-2" data-aos="slide-up" data-aos-duration="700">
             <input  className='contact-input w-100 text-light  ' type='text'  placeholder='YOUR SUBJECT' />
             </div>

             <div className="col-12 my-2" data-aos="slide-up" data-aos-duration="1000" >
             <textarea name="textarea" className=' text-light contact-input w-100 'placeholder='MESSAGE'  id="" cols="30" rows="10"></textarea>
             </div>

             <div className="col"  data-aos="slide-up" data-aos-duration="1300">
   
                <button class="button-33 mx-4" role="button">Send Message</button>


             </div>
              

            </div>
          </div>

      </div>
    </div>
  )
}
