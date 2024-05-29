import { ResponsiveBG } from "@/components/particles/particles";
import { ModeToggle } from "@/components/theme-switcher/mode-toggle";
import Image from "next/image";
import React from 'react'

import Nav from "@/components/nav/nav";
import { Header } from "@/components/header/header";
import Projects from "@/components/projects";
import Experience from "@/components/experiences";
export default function Home() {
  return (<React.Fragment>
     {/* <div className="w-full h-screen  bg-slate-500 bg-no-repeat bg-center text-orange dark:bg-black relative"> */}
    <div> 
     <Nav/>
     <Header/>
        <Projects/>
        <Experience/>
        </div> 
    </React.Fragment>
  );
}
