"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin-ui";
import Image from "next/image";

export function AnimatedPinDemo() {
  return (
    <div className="h-[30rem] p-4 w-full flex items-center justify-center ">
      <PinContainer
        title="contact@ultragleam.in"
        href="#"
     
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
           Click me for more details   
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Book an appointment with us for booking click the button below
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          <Image
            src= "/map.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />






        </div>
        </PinContainer>
    </div>
  );
}
