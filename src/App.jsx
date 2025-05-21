import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

function App() {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", { 
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 1.4,
      x: "-50%",
      bottom: "-25%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-15 h-2 border-2 border-white"></div>
                  <div className="line w-8 h-2 border-2 border-white"></div>
                  <div className="line w-5 h-2 border-2 border-white"></div>
                </div>
                <h3 className="text-4xl -mt-[8px] leading-none text-transparent [-webkit-text-stroke:2px_white]">
                  Rockstar
                </h3>
              </div>
            </div>  

            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-[12rem] leading-none -ml-40">grand</h1>
                <h1 className="text-[12rem] leading-none ml-20">theft</h1>
                <h1 className="text-[12rem] leading-none -ml-40">auto</h1>
              </div>
              <img
                className="absolute character -bottom-[25%] left-1/2 -translate-x-1/2  scale-[3] rotate-[-20deg]"
                src="./boybg1.png"
                alt=""
              />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-screen flex items-center justify-center bg-black relative overflow-hidden">
            <div className="cntnr flex text-white w-full h-[80%]">
              <div className="limg relative w-1/2 h-full flex items-center justify-center">
                <img
                  className="absolute scale-[1.3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-[1.4] transition-all duration-500"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-[30%] py-30 flex flex-col justify-center">
                <h1 className="text-8xl [-webkit-text-stroke:2px_white] text-transparent">Still Running,</h1>
                <h1 className="text-8xl [-webkit-text-stroke:2px_white] text-transparent">Not Hunting</h1>
                <p className="mt-10 text-2xl font-[Helvetica_Now_Display] leading-relaxed text-gray-300">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Distinctio possimus, asperiores nam, omnis inventore nesciunt
                  a architecto eveniet saepe, ducimus necessitatibus at
                  voluptate.
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-400 px-10 py-10 text-black mt-10 text-4xl transition-colors duration-300 w-fit">
                  Download Now
                </button>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
          </div>
          <div className="w-full h-screen flex items-center justify-center bg-black relative overflow-hidden">
            <div className="cntnr flex text-white w-full h-full relative">
              <div className="imagesdiv relative overflow-hidden w-full h-screen flex flex-col items-center">
                <img
                  className="absolute scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover opacity-20"
                  src="./bg.png"
                  alt=""
                />
                <div className="text text-white flex flex-col gap-3 mt-20 mb-10">
                  <h1 className="text-[8rem] leading-none text-center [-webkit-text-stroke:2px_white] text-transparent">the story</h1>
                  <h1 className="text-[8rem] leading-none text-center [-webkit-text-stroke:2px_white] text-transparent">begins</h1>
                </div>
                <div className="relative w-full h-[50vh] flex items-center justify-center">
                  <img
                    className="character scale-[2.5]"
                    src="./boybg2.png"
                    alt=""
                  />
                </div>
                <div className="w-[70%] text-center mt-10">
                  <p className="text-3xl mb-8 font-[Helvetica_Now_Display] leading-relaxed">
                    In the neon-lit streets of Vice City, a new legend is born. 
                    Rise from the shadows of the criminal underworld to become the 
                    most feared name in the city.
                  </p>
                  <p className="text-3xl mb-8 font-[Helvetica_Now_Display] leading-relaxed">
                    Experience the most immersive open world ever created, where 
                    every choice shapes your destiny and every corner holds a new 
                    opportunity.
                  </p>
                  <div className="flex justify-center gap-16 mt-20">
                    <div className="feature group">
                      <div className="h-1 w-20 bg-white mb-4 group-hover:w-32 transition-all duration-300"></div>
                      <h3 className="text-4xl mb-3 [-webkit-text-stroke:1px_white] text-transparent">Expanded World</h3>
                      <p className="text-2xl text-gray-400">Largest Vice City ever created</p>
                    </div>
                    <div className="feature group">
                      <div className="h-1 w-20 bg-white mb-4 group-hover:w-32 transition-all duration-300"></div>
                      <h3 className="text-4xl mb-3 [-webkit-text-stroke:1px_white] text-transparent">New Mechanics</h3>
                      <p className="text-2xl text-gray-400">Advanced combat and stealth systems</p>
                    </div>
                    <div className="feature group">
                      <div className="h-1 w-20 bg-white mb-4 group-hover:w-32 transition-all duration-300"></div>
                      <h3 className="text-4xl mb-3 [-webkit-text-stroke:1px_white] text-transparent">Dynamic Story</h3>
                      <p className="text-2xl text-gray-400">Your choices shape the narrative</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
