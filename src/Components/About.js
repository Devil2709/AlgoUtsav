import React from 'react'
import about from '../assets/Images/Aboutus.png';
import astronomer from '../assets/Images/astronomer.png';
import greenplanet from '../assets/Images/greenplanet1.png';
import blueplanet from '../assets/Images/blueplanet1.png';
export default function About() {
  return (
    <div>
      <div className='z-10'>
        <img
            alt='green planet'
            src={greenplanet}
            style={{ position: "absolute", top: "0", left: "0", maxWidth: "35%" }}
        />
      </div>
      <div style={{display: "flex", justifyContent: "center", width: "100%", alignItems: "center" }}>
        <img
          src={about}
          alt="sponsor_heading"
          style={{ maxWidth: "582px", maxHeight: "58px" }}
        />
      </div>
      <div className='flex justify-between'>
        <div >
          <img
           alt='_the_astromnomer'
           src={astronomer}
           style={{ maxWidth: "22rem", marginLeft: "15rem"}}
          />
        </div>
        <div className='p-14 pl-10 pr-48'>
          <h1 className="text-base text-yellow-400 font-pusab">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pellentesque, nisl nec interdum venenatis, nisl nibh gravida
            ligula, id facilisis mauris tortor ut nisl. Sed non nisl
            aliquam, ultricies dui quis, fermentum nibh. Nam auctor
            ullamcorper ante, ac tincidunt nisl. Nulla facilisi. Sed
            pellentesque, nisl nec interdum venenatis, nisl nibh gravida
            ligula, id facilisis mauris tortor ut nisl. Sed non nisl
            aliquam, ultricies dui quis, fermentum nibh. Nam auctor
            ullamcorper ante, ac tincidunt nisl. Nulla facilisi.
          </h1>
        </div>
      </div>
      <div className='z-10'>
        <img
            alt='blue planet'
            src={blueplanet}
            style={{ position: "absolute", bottom: "0", right: "0", maxWidth: "35%" }}
        />
      </div>
    </div>
    
  )
}
