"use client";
import React, { useState, useEffect } from "react";
import { Center, Checkbox, Button } from "@chakra-ui/react";
import { BsPersonFillGear, BsDatabaseFillGear } from "react-icons/bs";
import URL from "../../data/url";
import Checker from "../../data/check";
import { useRouter } from "next/navigation";

export default function Check() {

  if (Checker()) {
    return Page();
  } else {
      window.location.href = "/login";
  }
}
function handleUserM() {

  window.location.href =  "/user-manage";
  return null;
}
function handleProdM() {
  window.location.href = "/product-manage";
  return null;
}

function Page() {
  const router = useRouter();
  const [name, setName] = useState("");
  if (typeof window !== "undefined") {
    fetch(`${URL()}/api/v1/user/${localStorage.getItem("Username")}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data[0].fname + " " + data[0].lname);
        setName(data[0].fname + " " + data[0].lname);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }

  return (
    <div>
      <Center className="grid grid-cols-3 gap-32">
        <div className="flex flex-row">
          <div className="font-bold text-7xl text-center mt-20">
            <Center>{"Welcome "}</Center>
          </div>
          <div className="font-bold text-7xl text-center mt-20 italic">
            {name}!
          </div>
        </div>
      </Center>

      <div className="grid grid-cols-2 gap-4 mt-10">
        {/* left */}
        <Center>
          <div className="bg-[#FFFFFF] rounded-3xl flex flex-col p-5 mt-30 w-60 h-72 shadow-2xl">
            <div>
              <Center>
                <BsPersonFillGear size={120} color="#000000" />
              </Center>
            </div>
            <div className="font-bold align-text-bottom text-2xl mt-2">
              <Center>Users</Center>
              <Center>Manager</Center>
            </div>
            <Button
              onClick={handleUserM}
              className="text-xl rounded-full  border border-[#3E0070] text-[#FFFFFF] 
          bg-[#3E0070] hover:bg-[#FFFFFF] hover:text-[#3E0070]"
              mt={"3"}
              px={"3"}
              py={"2"}
              color={"white"}
              backgroundColor={"#3E0070"}
              rounded={"full"}
              size="3xl"
            >
              See More
            </Button>
          </div>
        </Center>

        {/* right */}
        <Center>
          <div className="bg-[#FFFFFF] rounded-3xl flex flex-col p-5 mt-30 w-60 h-72 shadow-2xl">
            <div>
              <Center>
                <BsDatabaseFillGear size={120} color="#000000" />
              </Center>
            </div>
            <div className="font-bold align-text-bottom text-2xl mt-2">
              <Center>Products</Center>
              <Center>Manager</Center>
            </div>
            <Button
              onClick={handleProdM}
              className="text-xl rounded-full border border-[#3E0070] text-[#FFFFFF] 
          bg-[#3E0070] hover:bg-[#FFFFFF] hover:text-[#3E0070]"
              mt={"3"}
              px={"3"}
              py={"2"}
              color={"white"}
              backgroundColor={"#3E0070"}
              rounded={"full"}
              size="3xl"
            >
              See More
            </Button>
          </div>
        </Center>
      </div>
    </div>
  );
}
