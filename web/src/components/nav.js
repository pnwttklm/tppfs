"use client";

import { Link } from "@chakra-ui/react";
import Checker from "../data/check";

import Image from "next/image";
import {
  BsPersonVcard,
}from "react-icons/bs";

export default function WithSubnavigation() {
  return (
    <nav id="nav" className="z-20 top-0 sticky w-screen h-20 bg-[#FFFFFF] shadow-md flex flex-1 justify-between px-16 place-self-center">
        <Link href="/" className="item-center flex flex-row place-self-center">
          <Image
            width={200}
            height={200}
            src='logo_full.svg'
            className="pl-6 pt-2 place-self-center"
            alt="logo-navbar"
          />
        </Link>
        <section className="flex mr-4 collapse md:visible place-self-center gap-3">
              <Link p={2} href={"/our-team"}>
                <h1 className="font-extrabold text-[#3E0070]">Our Team</h1>
              </Link>
              <Link className="bg-[#3E0070] rounded-full px-4 py-3 flex flex-row gap-2" href="/login">
                <BsPersonVcard size={28} color="#FFFFFF" /> 
                <h1 className="text-white font-extrabold">Staff Zone</h1>
              </Link>
              <Log_out />
        </section>
    </nav>
  );
}

function Log_out() {
  if(Checker() && typeof window !== "undefined"){
    return(
      <Link className="bg-[#3E0070] rounded-full px-4 py-3 flex flex-row gap-2" href="\login" onClick={(e) => {
        localStorage.removeItem('Status');
      }}>
        <h1 className="text-white font-extrabold">Log out</h1>
      </Link>
    );
  }
  return;
}