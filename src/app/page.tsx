import Image from "next/image";
import { Design } from "./components/Design";

export default function Home() {
  return (
    <div className="w-full h-screen  bg-slate-500 bg-no-repeat bg-center text-white dark:bg-black">
      <Design/>
    </div>
  );
}
