"use client"

import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { data2 } from "@/lib/constants";
 
export function AppleCardsCarouselDemo() {
  const cards = data2.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

return (
  <>
  <div className="w-full h-full pt-[-20px] pb-12">
<h2 className="max-w-7xl text-center pl-2 mx-auto text-m md:text-2xl font-bold text-neutral-800 dark:text-neutral-200 ">
Clean spaces inspire clear minds and happier, healthier living ❤
</h2>
<Carousel items={cards} />
</div>



  </>
)

}

