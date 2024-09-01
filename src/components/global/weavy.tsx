"use client";
import React from "react";
import { WavyBackground } from "../ui/wavy-background";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-3xl p-2 md:text-4xl lg:text-7xl text-white font-bold  text-center">
        Ultragleam Clean Home Gleam Home
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
      Sparkling homes create calm, comfort, and a stress-free life 😄
      </p>
    </WavyBackground>
  );
}
