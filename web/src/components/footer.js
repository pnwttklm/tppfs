"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32">
      <div
        className="flex flex-col p-8 bg-[#3E0070] w-full h-1/2 justify-between  gap-8
        md:h-full 
        "
      >
        <div className="flex items-end justify-between text-white text-[8px] md:text-xs">
          <h1>
            <b>tppfs</b>
            <br />
            <br />
            Faculty of Information and Communication Technology, Mahidol
            University
            <br />
            999 Phuttamonthon 4 Road, <br />
            Salaya , Nakhon Pathom 73170
            <br /> THAILAND
            <br />
          </h1>
          <h1 className="text-right">
            Copyright © {year}. tpffs,
            <br />
            in association with Faculty of Information and Communication
            Technology, Mahidol University. All rights reserved.
            <br />
            Version 1.0.0
          </h1>
        </div>
      </div>
    </footer>
  );
}

const link = [
  {
    name: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    name: "Terms of Use",
    link: "/terms",
  },
  {
    name: "Acknowledgement",
    link: "/acknowledgement",
  },
];
