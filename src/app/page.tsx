import { ResponsiveBG } from "@/components/particles/particles";
import { ModeToggle } from "@/components/theme-switcher/mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen  bg-slate-500 bg-no-repeat bg-center text-orange dark:bg-black">
      <ModeToggle/>
      <ResponsiveBG/>
    </div>
  );
}
