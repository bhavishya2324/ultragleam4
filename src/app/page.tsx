



import { AnimatedPinDemo } from "@/components/global/3d-pin";
import { DockDemo } from "@/components/global/docs";
import Footer from "@/components/global/footer";
import { HeroParallax } from "@/components/global/hero-parallax";
import { ImagesSliderDemo } from "@/components/global/image-slider";

import { LampComponent } from "@/components/global/lamp-effect";

import { AppleCardsCarouselDemo } from "@/components/global/movingcard";
import Navbar from "@/components/global/navbar";


import { WavyBackgroundDemo } from "@/components/global/weavy";
import { Dock } from "@/components/magicui/dock";



import { clients, products, textwords } from "@/lib/constants";

import { CheckIcon, Section } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main >
  
 



<Navbar />



  <WavyBackgroundDemo />
  


<AppleCardsCarouselDemo />
  
       
         <section className="mt-[-150px]">
      <LampComponent />

      </section>



        <HeroParallax products={products}></HeroParallax>
    
     


<ImagesSliderDemo/>
 





<Footer/>



    </main>
  );
}
