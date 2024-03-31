"use client";
import React, { useState } from "react";
import { Center, Checkbox, Button } from "@chakra-ui/react";
import { BsPersonFillGear, BsDatabaseFillGear } from "react-icons/bs";
import { Link } from "@chakra-ui/react";

  const axios = require("axios");
  let data = JSON.stringify({
    username: "",
    password: "",
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:3030/api/v1/login",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios
    .request(config)
    .then((response:any) => {
      alert(response.data.pass);
      // if(response.data.pass===false){
      // window.location.href = "/login";
    // }
  })
    .catch((error:any) => {
      console.log(error);
    });

function UserManage() {
  return location.href = '/user-manage/[slug]';
}
function ProdManage(){
  return location.href = '/product-manage/[slug]';
}
export default function Page() {
  return (
    <div>
      {/*Photo and  Text*/}
      <Center className="grid grid-cols-3 gap-32">
        <Center>
          <img
            src="/car.jpeg"
            className="rounded-full flex w-30 h-30 border-4 mt-10 ml-30"
          ></img>
        </Center>
        <div className="flex flex-row">
          <div className="font-bold text-7xl text-center mt-20">
            <Center>Welcome</Center>
          </div>
          <div className="font-bold text-7xl text-center mt-20 italic">
            TATA!
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
              onClick={() => UserManage()}
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
              onClick={() => ProdManage()}
              className="text-xl rounded-full border border-[#3E0070] text-[#FFFFFF] 
          bg-[#3E0070] hover:bg-[#FFFFFF] hover:text-[#3E0070]"
              mt={"3"}
              px={"3"}
              py={"2"}
              color={"white"}
              backgroundColor={"#3E0070"}
              rounded={"full"}
              size="3xl">
              See More
            </Button>
          </div>
        </Center>
      </div>
    </div>
  );
}