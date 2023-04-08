import React from 'react'



export default function Home() {
  return (
        <>

        {/* Upper section */}
        <div className="row " style={{margin:'0',minHeight:'80vh'}}>
            <div className="col-md align-self-center  ">
              <div className='theme-color' data-aos="slide-down" data-aos-duration="750" style={{paddingLeft:'7rem'}}>INTRODUCTION</div>
              <h1 className='heading-name font-style' data-aos="slide-down" data-aos-duration="700">Love</h1>
              <h1 className='heading-name font-style ' data-aos="slide-down" data-aos-duration="600">Dazzell</h1>
              <p className="text-light"  data-aos="slide-down" data-aos-duration="500" style={{paddingLeft:'7rem'}}>
                Hi! I am Full Stack Web Developer, UI/UX Designer.
              </p>
            </div>

            <div className="col-md text-center my-4" data-aos-duration="700"  data-aos="slide-down">
                <img style={{width:'25rem'}}  src={require('../assets/images/love.png')} alt="" />
            </div>
        </div>


       
        <section  className='py-5 ' style={{backgroundColor:'#0c0c0c',minHeight:'60vh'}}>
          <p className="theme-color text-center">SERVICES</p>
          <h1 className="text-center text-light mb-5">What I Am Great At</h1>
          <div className="container">
            <div className="row gx-5  justify-content-center" >

                <div className="col-md-3 mb-5 " data-aos="slide-left"  data-aos-duration="800" >
                  <div className=' text-center bg-dark text-light' style={{minHeight:'19rem'}} >
                  <img  className='py-3' style={{width:'7rem'}}  src={require('../assets/images/pen.png')} alt="" />
                  <h5 className='theme-color' >UI/UX Design</h5>
                  <p className='px-3'>Expert in PhotoShop, Canva, Adobe Creative Cloud</p>
                  </div>
                </div>

                <div className="col-md-3  mb-5" data-aos="slide-left"  data-aos-duration="1000" >
                  <div className=' text-center bg-dark text-light' style={{minHeight:'19rem'}} >
                  <img  className='py-3' style={{width:'7rem'}}  src={require('../assets/images/code.png')} alt="" />
                  <h5 className='theme-color' >Frontend Development</h5>
                  <p className='px-3'>HTML, CSS, AJAX, JQuery, BootStrap, JavaScript, React Js </p>
                  </div>
                </div>

                <div className="col-md-3  mb-5" data-aos="slide-left"  data-aos-duration="1200" >
                  <div className=' text-center bg-dark text-light' style={{minHeight:'19rem'}} >
                  <img  className='py-3' style={{width:'7rem'}}  src={require('../assets/images/backend.png')} alt="" />
                  <h5 className='theme-color' >Backend Development</h5>
                  <p className='px-3'>Python, JavaScript, Django, Rest FrameWork </p>
                  </div>
                </div>
                
            </div>
          </div>
        </section>
      
        <section className='py-5' style={{minHeight:'70vh'}} >
            <div className="container">
                <p className="text-center theme-color ">
                  MY SKILLS
                </p>
                <h1 className="text-center text-light mb-5">Ability Of Different Languages</h1>

                <div className="row">
                    <div className="col-md-6 my-3 " data-aos="zoom-out-right" data-aos-duration="1000">
                        <h3 className='font-style text-light text-center' >PYHTON</h3>
                        <div class="progress bg-dark" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar  theme-bg " style={{width:'100%'}} ></div>
                        </div>
                    </div>

                    <div className="col-md-6 my-3" data-aos="zoom-out-left" data-aos-duration="1000">
                        <h3 className='font-style text-light text-center' >HTML</h3>
                        <div class="progress bg-dark" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar  theme-bg" style={{width:'100%'}}></div>
                        </div>
                    </div>
                    <div className="col-md-6 my-3" data-aos="zoom-out-right" data-aos-duration="1000">
                        <h3 className='font-style text-light text-center' >CSS</h3>
                        <div class="progress bg-dark" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar   theme-bg" style={{width:'100%'}}></div>
                        </div>
                    </div>
                    <div className="col-md-6 my-3" data-aos="zoom-out-left" data-aos-duration="1000">
                        <h3 className='font-style text-light text-center' >DJANGO</h3>
                        <div class="progress bg-dark" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar  theme-bg" style={{width:'100%'}}></div>
                        </div>
                    </div>
                    <div className="col-md-6 my-3" data-aos="zoom-out-right" data-aos-duration="1000">
                        <h3 className='font-style text-light text-center' >REACT JS</h3>
                        <div class="progress bg-dark" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar  theme-bg"  style={{width:'90%'}}></div>
                        </div>
                    </div>
                    <div className="col-md-6 my-3" data-aos="zoom-out-left" data-aos-duration="1000">
                        <h3 className='font-style text-light text-center' >REST FRAMEWORK</h3>
                        <div class="progress bg-dark" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar   theme-bg" style={{width:'90%'}}></div>
                        </div>
                    </div>
                    <div className="col-md-6 my-3" data-aos="zoom-out-right" data-aos-duration="1000">
                        <h3 className='font-style text-light text-center' >JAVA SCRIPT</h3>
                        <div class="progress bg-dark" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar theme-bg" style={{width:'80%'}} ></div>
                        </div>
                    </div>
                </div>


            </div>
        </section >

        <section  className='py-5' style={{minHeight:'120vh'}}>
            <div className="container">
              <p className="text-center theme-color ">
                RECENT PROJECTS
              </p>
             

              <div className="row">


                <div className="col-md-4 p-3" data-aos="zoom-out" data-aos-duration="400">
                <div class="card bg-dark" >
                <img   src={require('../assets/images/project/in.png')} alt="" />
                  <div class="card-body " style={{border:'1px solid black'}} >
                    <p class="card-text text-light">Finance accountant site that kept record of every customers and their money interest.</p>
                    <p class="card-text theme-color">Python, JavaScript, Django</p>
                  </div>
                </div>
                </div>

                <div className="col-md-4 p-3" data-aos="zoom-out" data-aos-duration="900">
                <div class="card bg-dark" >
                <img   src={require('../assets/images/project/sa.png')} alt="" />
                  <div class="card-body " style={{border:'1px solid black'}} >
                    <p class="card-text text-light">Multi Utility site for short term investment with recharge api integration.</p>
                    <p class="card-text theme-color">Python, JavaScript, Django, AJAX</p>
                  </div>
                </div>
                </div>

                <div className="col-md-4 p-3" data-aos="zoom-out" data-aos-duration="1200">
                <div class="card bg-dark" >
                <img   src={require('../assets/images/project/ra.png')} alt="" />
                  <div class="card-body " style={{border:'1px solid black'}} >
                    <p class="card-text text-light">Blog with vedio subscription feacture.</p>
                    <p class="card-text theme-color">Python, JavaScript, Django, Bootstrap</p>
                  </div>
                </div>
                </div>

                <div className="col-md-4 p-3" data-aos="zoom-out" data-aos-duration="1500">
                <div class="card bg-dark" >
                <img   src={require('../assets/images/project/tr.png')} alt="" />
                  <div class="card-body " style={{border:'1px solid black'}} >
                    <p class="card-text text-light">Online casino with multiiple prediction gaming features.</p>
                    <p class="card-text theme-color">Python, JavaScript, Django, Bootstrap, Rest Framework</p>
                  </div>
                </div>
                </div>


              </div>

            </div>
        </section>




        </>
  )
}
