import React from "react";
import { MacbookScroll } from "../ui/macbook-scroll";
import Link from "next/link";
import { Badge } from "lucide-react";
 
export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden  mt-[-250px] md:mt-[60px] dark:bg-[#0B0B0F] h-full bg-white w-full">
      <MacbookScroll
        title={
          <span className="text-4xl">
            ULTRAGLEAM Clean Home <br /> Gleam Home.
          </span>
        }
        badge={
          <Link href="#">
            <Badge className="h-10 w-10 transform -rotate-12" />
          </Link>
        }
        src={`/ultragleam.jpeg`}
        showGradient={false}
      />
    </div>
  );
}