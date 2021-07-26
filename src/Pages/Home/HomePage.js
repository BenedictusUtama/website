import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import triangles from '../../Files/Triangles.svg'
/* import graphic from '../../Files/graphic1.jpg' */
import graphic from '../../Files/undraw_building_websites.svg'

import teal_grad from '../../Files/gradients/home_about.svg'
import gray_grad from '../../Files/gradients/home_events.svg'
import EventWheel from './Home_Components/EventWheel'

import Subsidaries from './Home_Components/Subsidaries'

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import luay from '../../Files/Home_Gallery/12976851_1138128249563543_7955453846841172046_o.jpg'
import tim from '../../Files/Home_Gallery/84334897_2881793055197045_101138358037643264_o.jpg'
import beach from '../../Files/Home_Gallery/116396755_1957654227698199_1890081075763795255_n.jpg'


const first_blurb = `Creating a community of mentors 
and friends and partnering with companies 
to provide the best resources for students to 
explore computer science and software`;



function HomePage() {

    let imgs = [luay, tim, beach]
    let gall = []
    

    for(let i = 0; i < imgs.length; i++){
      gall.push(
      <div>
        <img src = {imgs[i]} height="100px" />
      </div>
      )
    }

    return (
    <div className="relative w-auto h-auto border-4 border-indigo-500 border-opacity-100">
      <Header/>
      <div className="flex flex-col md:flex-row justify-evenly items-center">
        <div className="md:w-400px lg:w-500px laptop-l:w-600px">
          <div className="relative z-10  text-rice-blue text-center md:text-left font-bold text-4xl lg:text-5xl laptop-l:text-6xl">
            RICE UNIVERSITY 
            <br></br>
            CS CLUB
          </div>
          <div className="rounded overflow-hidden text-center md:text-left mx-10 md:mx-0">
              <p className="relative z-10 my-10 md:mt-0 text-gray-500b font-light leading-snug text-xl lg:text-2xl laptop-l:text-3xl">
                {first_blurb}
              </p>
          </div>
        </div>
        <img className=" w-300px my-10 justify-self-center md:w-400px lg:w-500px laptop-l:w-600px" src={graphic}></img>
      </div>

      <img className="opacity-0 md:opacity-100 absolute z-10 -mt-36 bg-no-repeat bg-left" width="240px" height="240px" src={triangles}/>

      <div class = "relative z-10 ml-24 mt-72 mb-4 flex flex-row">
        <img src={teal_grad} class = "absolute z-0 -mt-20 right-0"/>
        <gall class = "w-148">
          <AliceCarousel items = {gall} autoPlay={true} autoPlayInterval={2500} duration = {1000} 
          mouseTrackingEnabled buttonsDisabled/>  
        </gall>
        <copy class = "relative z-10 flex flex-col">
          <subhead class = "font-semibold text-5xl -mt-4">
            Who we are
          </subhead>
          <body class = "font-light text-2xl">
            Rice CS Club is an organization dedicated to providing Rice students with a tight-knit community 
            of friends and mentors to promote and advocate computer science and working with tech. Community 
            events include study breaks, social outings, and meet and greets between different classes. We 
            also provide professional resources for members including company-sponsored informational and 
            networking events, resume and algorithm review sessions, social outings, and tech workshops.
          </body>
        </copy>
        {/* <gall class = "flex md:hidden w-1/3">
          <AliceCarousel items = {gall} autoPlay={true} autoPlayInterval={2500} duration = {1000} 
          mouseTrackingEnabled buttonsDisabled/>  
        </gall> */}
      </div>

      <img src={gray_grad} class = "absolute z-0 -mt-8"/>
      <div  class = "relative content-center">
        <EventWheel/>
      </div>
      

      <div  class = "relative z-10">
        <Subsidaries/>
      </div>

      {/* testimonials/interviews */}
      <div class = "flex flex-col relative z-10 text-xl font-light mx-1/6 mb-4 mt-24">
        <copy>
        "I participated in HackRice my freshman year because I heard it was really fun. I didn’t know anyone else
        who was participating, so I joined a random team at the start of the event. We worked together really well 
        and we actually ended up winning first prize! HackRice was a super rewarding experience- I got to meet and 
        learn from so many different people, make lots of new friends, and see some really interesting projects. I 
        had such a great time and I wanted to give back, so I’ve stayed involved ever since. This year I’m co-directing HackRice!"
        </copy>
        <person class = "ml-1/10 my-4">
          — Claire Wang, Class of 2022
        </person>
      </div>
      <Footer/>
    </div>
       
    );
  }

export default HomePage;