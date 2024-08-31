import React from "react";

function LandingPage() {
  // ANIMATION ON LOAD, A LINE COMING DOWN FROM "TOTAL IT SPECIALISTS DOWN TO WE'RE LIVE WHERE THEN IT IS A RIPPLE EFFECT LIKE A PING ANIM"
  return (
    <div className="w-full min-h-screen h-full pt-52">
      <div className="flex flex-wrap w-full h-full justify-center items-center pb-48 ">
        <div className=" text-8xl text-white font-monts text-center pt-20  transition-all pointer-events-none">
          <div className="text-white text-xl w-full flex justify-center pb-10">
            <button
              className="border-white rounded-xl p-2 border-2 w-fit h-fit pointer-events-auto"
              title="We are live and ready for you today!"
            >
              {" "}
              We're Live!
            </button>
          </div>{" "}
          <h1 className=" font-bold">
            A task-based Marketplace <br></br> for your every need
          </h1>
          <p className="text-2xl text-center pt-8 text-gray-600 pb-24">
            Your on-demand Personal assistant to everything.
          </p>
        </div>
        <div className="w-full">
          <ul className="flex w-full h-fit justify-center gap-20">
            <li title="Click for a list of all our services!">
              <button
                className="w-52 h-20 p-2 flex justify-center items-center bg-white text-black font-roboto font-semibold rounded-lg text-2xl hover:bg-gray-200 hover:text-3xl duration-500
               transition-all"
              >
                Our Services
              </button>
            </li>
            <li title="Click for a list of ways to contact us!">
              <button className="w-52 h-20 p-2 border-white border-2 text-white flex justify-center items-center font-roboto font-semibold rounded-lg text-2xl hover:text-3xl transition-all">
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
