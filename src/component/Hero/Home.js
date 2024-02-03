import React from "react"
import "./Home.css"
import hero from "../pic/nisu.jpeg"
import js from "../pic/js.png"
import react from "../pic/react.png"
import node from "../pic/node ja.svg"

import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hey, I’m <span>Nisarg</span>
            </h1>
            <h2>
              a 
              <span>
                <Typewriter words={[" Front-End-Devloper",  "React Devloper."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                <button className='btn_shadow'>
                      <a href="https://github.com/NisargShah30"> <i class='fab fa-github'></i></a>
                    </button>
                    <button className='btn_shadow'>
                      <a href="https://www.instagram.com/nisarg__shah__?igsh=MTJvYnB0MmtzMGsyOQ=="><i className='fab fa-instagram'></i></a>
                    </button>
                    <button className='btn_shadow'>
                      <a href="https://www.linkedin.com/in/nisarg-shah-768a1029a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class='fab fa-linkedin-in'></i></a>
                    </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={js} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={react} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={node} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
