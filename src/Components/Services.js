import React, { useState } from "react";
import Card from "./Card";

function Services() {
  const [toggleActive, setToggleActive] = useState(0);
  return (
    <div className="w-screen max-w-full h-screen bg-ccOffwhite  overflow-hidden">
      <h1 className="text-black text-8xl font-monts font-semibold text-center pt-32">
        Our Services
      </h1>

      {/* Home VS Industry Toggle */}
      <div className="w-full flex flex-nowrap justify-center items-center pt-10">
        {toggleActive === 0 ? (
          <div className="w-fit h-10 flex flex-nowrap justify-center items-center">
            <button
              className="text-white w-44 text-2xl font-monts font-semibold p-4 rounded-l-lg bg-black transition-all"
              onClick={() => {
                setToggleActive(0);
              }}
            >
              Home
            </button>
            <button
              className="text-black text-2xl w-44 font-monts font-semibold p-4 rounded-r-lg bg-white transition-all"
              onClick={() => {
                setToggleActive(1);
              }}
            >
              Industry
            </button>{" "}
          </div>
        ) : (
          <div className="w-fit h-10 flex flex-nowrap justify-center items-center">
            <button
              className="text-black w-44 text-2xl font-monts font-semibold p-4 rounded-l-lg bg-white transition-all"
              onClick={() => {
                setToggleActive(0);
              }}
            >
              Home
            </button>
            <button
              className="text-white text-2xl w-44 font-monts font-semibold p-4 rounded-r-lg bg-black transition-all"
              onClick={() => {
                setToggleActive(1);
              }}
            >
              Industry
            </button>{" "}
          </div>
        )}
      </div>

      {toggleActive === 0 ? (
        <div className="relative">
          <div className="absolute top-0 left-0 flex flex-wrap justify-center w-full h-fit pt-52 px-96 gap-20 transition-all duration-1500">
            <Card
              Name="IT Services"
              Description="We can help you with any IT problems. This means networking, IPs, Mesh networks. Computer problems. You name it we can help out!"
              BackgroundColor="#a59d94"
              IsFontAwesome={true}
              FontAwesomeTag={<i class="fa-solid fa-server"></i>}
            />
            <Card
              Name="Mechanical Services"
              Description="We can hook you up! Anything from your fridge not working to your AC. These are ameneties you pay for and we keep them in check."
              BackgroundColor="#a59d94"
              IsFontAwesome={true}
              FontAwesomeTag={<i class="fa-solid fa-wrench"></i>}
            />
            <Card
              Name="Electrical Services"
              Description="Lights not working? Need a new EV charger? Heated driveway? We'll hook you up! We can handle any type of electrical work!"
              BackgroundColor="#a59d94"
              IsFontAwesome={true}
              FontAwesomeTag={<i class="fa-solid fa-bolt-lightning"></i>}
            />
            <Card
              Name="Home Improvement"
              Description="Want new flooring? Custom entertainment built into your wall? Want to paint a room? We are dedicated to your homes improvement! "
              BackgroundColor="#a59d94"
              IsFontAwesome={true}
              FontAwesomeTag={<i class="fa-solid fa-house-chimney"></i>}
            />
            {/* Forces new row */}
            <Card
              Name="Bill Consolidation"
              Description="You can trust us! We will take care of your bills for you and deal with all the hassle! Electric, Gas, Water,Wifi no problem!"
              BackgroundColor="#a59d94"
              IsFontAwesome={true}
              FontAwesomeTag={<i class="fa-solid fa-money-check-dollar"></i>}
            />
          </div>
        </div>
      ) : (
        <div className="relative">
          <div className="absolute top-0 left-0 flex flex-wrap justify-center w-full h-fit pt-52 px-96 gap-20 transition-all  translate-x-5000 duration-1500">
            <Card
              Name="IT Services"
              Description="We can help you with any IT problems. This means networking, IPs, Mesh networks. Computer problems. You name it we can help out!"
              BackgroundColor="#a59d94"
              IsFontAwesome={true}
              FontAwesomeTag={<i class="fa-solid fa-server"></i>}
            />
            <Card
              Name="Mechanical Services"
              Description="We can hook you up! Anything from your fridge not working to your AC. These are ameneties you pay for and we keep them in check."
              BackgroundColor="#a59d94"
              IsFontAwesome={true}
              FontAwesomeTag={<i class="fa-solid fa-wrench"></i>}
            />
            <Card
              Name="Electrical Services"
              Description="Lights not working? Need a new EV charger? Heated driveway? We'll hook you up! We can handle any type of electrical work!"
              BackgroundColor="#a59d94"
              IsFontAwesome={true}
              FontAwesomeTag={<i class="fa-solid fa-bolt-lightning"></i>}
            />
            <Card
              Name="Home Improvement"
              Description="Want new flooring? Custom entertainment built into your wall? Want to paint a room? We are dedicated to your homes improvement! "
              BackgroundColor="#a59d94"
              IsFontAwesome={true}
              FontAwesomeTag={<i class="fa-solid fa-house-chimney"></i>}
            />
            {/* Forces new row */}
            <Card
              Name="Bill Consolidation"
              Description="You can trust us! We will take care of your bills for you and deal with all the hassle! Electric, Gas, Water,Wifi no problem!"
              BackgroundColor="#a59d94"
              IsFontAwesome={true}
              FontAwesomeTag={<i class="fa-solid fa-money-check-dollar"></i>}
            />
          </div>
        </div>
      )}

      {toggleActive === 1 ? (
        <div className="relative">
          <div className="absolute top-0 left-0 flex flex-wrap justify-center w-full h-fit pt-52 px-96 gap-20 transition-all duration-1500">
            <Card
              Name="Base Building"
              Description="We offer plumbing services for industrial buildings. This is for you if you have no base building technicians!"
              BackgroundColor="#a59d94"
              IsFontAwesome={true}
              FontAwesomeTag={<i class="fa-solid fa-building"></i>}
            />
            <Card
              Name="High Voltage Electrical"
              Description="Sometimes electrical work can get dangerous. We can work on any level of voltage keeping your employees safe!"
              BackgroundColor="#a59d94"
              IsFontAwesome={true}
              FontAwesomeTag={<i class="fa-solid fa-bolt-lightning"></i>}
            />
            <Card
              Name="Safety Training"
              Description="We are certified OSHA trainers. We can help train anyone in potential hazardess environments"
              BackgroundColor="#a59d94"
              IsFontAwesome={true}
              FontAwesomeTag={<i class="fa-solid fa-helmet-safety"></i>}
            />
            {/* Forces new row */}
            <div className=" basis-full" />
          </div>
        </div>
      ) : (
        <div className="relative">
          <div className="absolute top-0 left-0 flex flex-wrap justify-center w-full h-fit pt-52 px-96 gap-20 -translate-x-4000 transition-all duration-1500">
            <Card
              Name="Base Building"
              Description="We offer plumbing services for industrial buildings. This is for you if you have no base building technicians!"
              BackgroundColor="#a59d94"
              IsFontAwesome={true}
              FontAwesomeTag={<i class="fa-solid fa-building"></i>}
            />
            <Card
              Name="High Voltage Electrical"
              Description="Sometimes electrical work can get dangerous. We can work on any level of voltage keeping your employees safe!"
              BackgroundColor="#a59d94"
              IsFontAwesome={true}
              FontAwesomeTag={<i class="fa-solid fa-bolt-lightning"></i>}
            />
            <Card
              Name="Safety Training"
              Description="We are certified OSHA trainers. We can help train anyone in potential hazardess environments"
              BackgroundColor="#a59d94"
              IsFontAwesome={true}
              FontAwesomeTag={<i class="fa-solid fa-helmet-safety"></i>}
            />
            {/* Forces new row */}
            <div className=" basis-full" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;
