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
              className="text-white w-24 font-monts font-semibold p-4 rounded-l-lg bg-black transition-all"
              onClick={() => {
                setToggleActive(0);
              }}
            >
              Home
            </button>
            <button
              className="text-black w-24 font-monts font-semibold p-4 rounded-r-lg bg-white transition-all"
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
              className="text-black w-24 font-monts font-semibold p-4 rounded-l-lg bg-white transition-all"
              onClick={() => {
                setToggleActive(0);
              }}
            >
              Home
            </button>
            <button
              className="text-white w-24 font-monts font-semibold p-4 rounded-r-lg bg-black transition-all"
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
              Description="Any and all IT Services! This includes Home networks, VPNs"
              BackgroundColor="#a59d94"
              IsFontAwesome={true}
              FontAwesomeTag={<i class="fa-solid fa-server"></i>}
            />
            <Card
              Name="Mechanical Services"
              Description="Any and all IT Services! This includes Home networks, VPNs"
              BackgroundColor="#a59d94"
              IsFontAwesome={true}
              FontAwesomeTag={<i class="fa-solid fa-wrench"></i>}
            />
            <Card
              Name="Electrical Services"
              Description="Any and all IT Services! This includes Home networks, VPNs"
              BackgroundColor="#a59d94"
              IsFontAwesome={true}
              FontAwesomeTag={<i class="fa-solid fa-bolt-lightning"></i>}
            />
            <Card
              Name="Home Improvement"
              Description="Any and all IT Services! This includes Home networks, VPNs"
              BackgroundColor="#a59d94"
              IsFontAwesome={true}
              FontAwesomeTag={<i class="fa-solid fa-house-chimney"></i>}
            />
            {/* Forces new row */}
            <Card
              Name="Bill Consolidation"
              Description="Any and all IT Services! This includes Home networks, VPNs"
              BackgroundColor="#a59d94"
              IsFontAwesome={true}
              FontAwesomeTag={<i class="fa-solid fa-money-check-dollar"></i>}
            />
          </div>
        </div>
      ) : (
        <div className="relative">
          <div className="absolute top-0 flex flex-wrap justify-center w-full h-fit pt-52 px-96 gap-20  translate-x-4000 transition-all duration-1500">
            <Card
              Name="IT Services"
              Description="Any and all IT Services! This includes Home networks, VPNs"
              BackgroundColor="#a59d94"
              IsFontAwesome={true}
              FontAwesomeTag={<i class="fa-solid fa-server"></i>}
            />
            <Card />
            <Card />
            <Card />
            {/* Forces new row */}
            <div className=" basis-full" />
            <Card />
          </div>
        </div>
      )}

      {toggleActive === 1 ? (
        <div className="relative">
          <div className="absolute top-0 left-0 flex flex-wrap justify-center w-full h-fit pt-52 px-96 gap-20 transition-all duration-1500">
            <Card
              Name="IT Services"
              Description="Any and all IT Services! This includes Home networks, VPNs"
              BackgroundColor="#a59d94"
              IsFontAwesome={true}
              FontAwesomeTag={<i class="fa-solid fa-server"></i>}
            />
            <Card />
            <Card />
            <Card />
            {/* Forces new row */}
            <div className=" basis-full" />
            <Card />
          </div>
        </div>
      ) : (
        <div className="relative">
          <div className="absolute top-0 flex flex-wrap justify-center w-full h-fit pt-52 px-96 gap-20  -translate-x-4000 transition-all duration-1500">
            <Card
              Name="PLEASE WORK"
              Description="Any and all IT Services! This includes Home networks, VPNs"
              BackgroundColor="#a59d94"
              IsFontAwesome={true}
              FontAwesomeTag={<i class="fa-solid fa-server"></i>}
            />
            <Card />
            <Card />
            <Card />
            {/* Forces new row */}
            <div className=" basis-full" />
            <Card />
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;
