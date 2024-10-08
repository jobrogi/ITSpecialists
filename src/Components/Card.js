import React from "react";

function Card(props) {
  let Name = props.Name || "Card Name";
  let BackgroundColor = props.BackgroundColor || "";
  let IsFontAwesome = props.IsFontAwesome || true;
  let FontAwesomeTag = props.FontAwesomeTag || (
    <i class="fa-solid fa-code "></i>
  );
  let Description =
    props.Description || "this is a test Description. Please ignore it or else";

  return (
    <div
      className="w-450 h-500 flex flex-wrap"
      style={{ backgroundColor: BackgroundColor }}
    >
      <div className="justify-start content-start flex flex-wrap p-5 rounded-lg">
        <div className="w-full flex flex-nowrap items-center justify-between pb-5 text-5xl">
          <h1 className="font-monts">{Name}</h1>
          {IsFontAwesome === true ? FontAwesomeTag : ""}
        </div>
        <div>
          <p className="text-4xl font-roboto">{Description}</p>
        </div>

        {/* <hr className="w-full"></hr> */}
      </div>
      <div className="flex w-full justify-end p-5  ">
        <button className="text-4xl w-fit flex-nowrap flex justify-end items-end gap-5">
          <h1 className="">Learn More</h1>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Card;
