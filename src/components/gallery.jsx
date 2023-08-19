import React from 'react'
import imagenslider from '../../src/assets/imagenslider2.png';
const Gallery = () => {
  return (
    <section className='gallery '>
        <div className="InfoAbout-media">
            <div className="InfoAbout-video"><img src={imagenslider} alt="" /></div>
            <div className="InfoAbout-container">
                <div className="InfoAbout-pictures">
                    <div className="InfoAbout-picture"><img src={imagenslider} alt="" /></div>
                    <div className="InfoAbout-picture"><img src={imagenslider} alt="" /></div>
                </div>
                <div className="InfoAbout-pictures">
                    <div className="InfoAbout-picture"><img src={imagenslider} alt="" /></div>
                    <div className="InfoAbout-picture"><img src={imagenslider} alt="" /></div>
                </div>
            </div>
        </div>
        <div className="InfoAbout-media">
            <div className="InfoAbout-container">
                <div className="InfoAbout-pictures">
                    <div className="InfoAbout-picture"><img src={imagenslider} alt="" /></div>
                    <div className="InfoAbout-picture"><img src={imagenslider} alt="" /></div>
                </div>
            </div>
            <div className="InfoAbout-container">
                <div className="InfoAbout-pictures">
                    <div className="InfoAbout-picture"><img src={imagenslider} alt="" /></div>
                    <div className="InfoAbout-picture"><img src={imagenslider} alt="" /></div>
                </div>
            </div>
        </div>
  </section>
  )
}

export default Gallery