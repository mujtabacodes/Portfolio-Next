"use client";
import Image from "next/image";

import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <div className="dark:bg-black">
     Hello from demo
        <Spline scene="https://prod.spline.design/iVeqrcLm6IxMhWvr/scene.splinecode" />
    </div>
  );
}