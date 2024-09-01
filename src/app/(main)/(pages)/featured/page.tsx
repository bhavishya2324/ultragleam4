
import { CardBody, CardContainer, CardItem } from '@/components/global/3d-card';
import { BackgroundBeams } from '@/components/global/contact-effect';
import { Button } from '@/components/ui/button';


import Image from "next/image";
import Link from 'next/link';
import React from 'react'





const FeaturedPage = () => {
  return (
<>
   
    <div className="max-w-6xl flex text-xl text-sm font-sans items-center  mt-[150px] flex-col mx-auto px-2">



<div className="flex flex-wrap items-center justify-center flex-col  md:flex-row gap-4 ">

<CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
    A clean home brings peace
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
       ✨ Donate, recycle, or discard unused belongings to maintain a tidy and organized space. Less clutter means easier cleaning and a more spacious feel.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/clean3.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
     
      </CardBody>
    </CardContainer>



    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
   Every corner clean,every moment serene
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
        
       ✔ Do a quick sweep and wipe down of surfaces daily, vacuum and mop weekly, and deep clean areas like the kitchen and bathroom monthly.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/clean6.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="nazlix"
          />
        </CardItem>
     
      </CardBody>
    </CardContainer>






    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
    A tidy home reflects care, pride, and positive living
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
        
        💯 Regularly vacuum, dust, and wipe down surfaces in these spaces to keep them looking fresh and prevent dirt from spreading to other parts of the house.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/clean7.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="Community Distribution"
          />
        </CardItem>
     
      </CardBody>
    </CardContainer>





    </div>


    <Button
                  
                  
                  className="p-6 mt-8 mb-4 md:mb-0 text-xl  sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-green-300 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                 
                  <Link href="/services">Ultragleam Specials</Link>
                  </span>
                </Button>


 

        </div>



</>



  )
}

export default FeaturedPage
