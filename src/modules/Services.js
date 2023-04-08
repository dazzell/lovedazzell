import React from 'react'

export default function Services() {
  return (
   <div className="container">
    <h3 className="font-style text-center theme-color">
      SERVICES
    </h3>
    <div className="row  py-4">
      <div className="col-md-4 my-3">

        {/* first row */}
        <div className="row">

          <div className="col-4  text-center "  data-aos="zoom-out-right" data-aos-duration="700">
            <img src={require('../assets/images/python.png')} alt="" />
          </div>
          <div className="col-4  text-center "  data-aos="zoom-out-right" data-aos-duration="700"   >
            <img src={require('../assets/images/html.png')} alt="" />
          </div>
          <div className="col-4  text-center "  data-aos="zoom-out-right" data-aos-duration="700"   >
            <img src={require('../assets/images/bootstrap.png')} style={{width:'70px'}} alt="" />
          </div>

        </div>

      </div>

      <div className="col-md-4 my-3">

      {/* second row */}
      <div className="row">

          <div className="col-4  text-center  " data-aos="zoom-out-right" data-aos-duration="700"  >
            <img src={require('../assets/images/css.png')} alt="" />
          </div>
          <div className="col-4  text-center "  data-aos="zoom-out-right" data-aos-duration="700"   >
            <img src={require('../assets/images/react.png')} style={{width:'70px'}}  alt="" />
          </div>
          <div className="col-4  text-center "  data-aos="zoom-out-right" data-aos-duration="700"   >
            <img src={require('../assets/images/jquery.png')} style={{width:'70px'}}  alt="" />
          </div>

        </div>



      </div>

      <div className="col-md-4 my-3">

      {/* third row */}
      <div className="row">

          <div className="col-4  text-center "  data-aos="zoom-out-right" data-aos-duration="700"   >
            <img src={require('../assets/images/js.png')} style={{width:'70px'}}  alt="" />
          </div>
          <div className="col-4  text-center "  data-aos="zoom-out-right" data-aos-duration="700"   >
            <img src={require('../assets/images/ajax.png')} style={{width:'70px'}} alt="" />
          </div>
          <div className="col-4  text-center "  data-aos="zoom-out-right" data-aos-duration="700"   >
            <img src={require('../assets/images/django.png')} alt="" />
          </div>

        </div>

      </div>

    </div>
   </div>
  )
}
