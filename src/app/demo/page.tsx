"use client";
import Image from "next/image";

import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <div>
     Hello from demo
        <Spline scene="https://prod.spline.design/i8eNphGELT2tDQVT/scene.splinecode" />
    </div>
  );
}