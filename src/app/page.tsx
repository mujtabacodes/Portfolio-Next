import { NavigationMenu } from "@/components/landing/appbar/nav-menu";
import { ResponsiveBG } from "@/components/particles/particles";
import { ModeToggle } from "@/components/theme-switcher/mode-toggle";
import Image from "next/image";
import Demo from "./demo/page";
import React from 'react'
import { Navbar } from "@/components/Navbar";
export default function Home() {
  return (<React.Fragment>
    <Navbar/>
    <div>
      <NavigationMenu/>
      <ModeToggle/>
        
      <div className="">
        
      {/* <Demo/> */}
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aperiam beatae ipsam tempore in, facilis suscipit eos blanditiis debitis libero ullam accusantium neque rem ea animi. Necessitatibus modi illum odio.
        </div>
    </div>
    </React.Fragment>
  );
}
