"use client";
import React, { useState, useEffect } from "react";
import {
  Center,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Divider,
  Button,
} from "@chakra-ui/react";
import {
  BsPerson,
  BsEnvelope,
  BsLock,
  BsTelephone,
  BsEyeFill,
  BsEyeSlashFill,
} from "react-icons/bs";
import URL from "../../data/url";
import Checker from "../../data/check";
import { useRouter } from "next/navigation";

interface User {
  pass: boolean;
  username: string;
  password: string;
}

export default function Check() {
  const router = useRouter();
  if (Checker()) {
    window.location.href = "/admin";
  } else {
    return LoginPage();
  }
}

interface Time {
  datetime: Date | null;
  username: string;
}

function LoginPage() {
  const router = useRouter();
  const [show, setShow] = React.useState(false);
  const [ID, setID] = useState("");
  const [password, setPassword] = useState("");
  const handleID = (e: any) => setID(e.target.value);
  const handlePass = (v: any) => setPassword(v.target.value);
  const handleClick = () => setShow(!show);
  const axios = require("axios");

  function Addlogin(time: Date, username: string) {
    const axios = require("axios");
    let data = JSON.stringify({
      time: time,
      username: username,
    });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: URL() + "/api/v1/login_time",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response: any) => {
        console.log(response);
        if (response) console.log("Time Added Successfully");
      })
      .catch((error: any) => {
        console.log("Error Adding Time login" + error);
      });
  }

  const [shown, setShown] = useState(false);

  function DefaultPage() {
    const axios = require("axios");
    let data = JSON.stringify({
      username: String(ID),
      password: String(password),
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: URL() + "/api/v1/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    if (typeof window !== "undefined") {
      axios
        .request(config)
        .then((response: any) => {
          if (response.data.pass) {
            Addlogin(new Date(), response.data.username);
            localStorage.setItem("Status", "Admin");
            localStorage.setItem("Username", response.data.username);
              setTimeout(() => {
                window.location.href = "/admin";
              }, 1000);
          } else {
            setShown(true);
          }
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  }

  return (
    <div className="bg-[#F5F5F5] h-screen">
      <Center className="h-full">
        <Center className="bg-[#FFFFFF] mx-6 rounded-3xl flex flex-col p-12 mt-8 w-fit shadow-2xl">
          {shown && <p className="text-[#FE0000]">Wrong Login Credentials</p>}
          <img src="/logo.svg" width={100} height={100}></img>
          <br></br>
          <h1 className="text-3xl font-extrabold mb-6">Login</h1>
          <div className="text-[#1C3B5A] mt-6">
            <InputGroup className="mt-8 bg-[#FFFFFF]" size="lg">
              <InputLeftElement pointerEvents="none">
                <BsPerson color="#807A7A" />
              </InputLeftElement>
              <Input
                placeholder="Username"
                value={ID}
                type="text"
                onChange={handleID}
                rounded={"2xl"}
              />
            </InputGroup>
            <InputGroup className="mt-8 bg-[#FFFFFF]" size="lg">
              <InputLeftElement pointerEvents="none">
                <BsLock color="#807A7A" />
              </InputLeftElement>
              <Input
                pr="4.5rem"
                rounded={"2xl"}
                value={password}
                onChange={handlePass}
                type={show ? "text" : "password"}
                placeholder="Password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? (
                    <BsEyeSlashFill color="##1C3B5A" />
                  ) : (
                    <BsEyeFill color="##1C3B5A" />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
          </div>
          <Button
            onClick={() => DefaultPage()}
            className="rounded-full border border-[#3E0070] p-2  text-[#FFFFFF] bg-[#3E0070] hover:bg-[#FFFFFF] hover:text-[#3E0070]"
            mt={"16"}
            px={"6"}
            py={"3"}
            color={"white"}
            backgroundColor={"#3E0070"}
            rounded={"full"}
          >
            Login
          </Button>
        </Center>
      </Center>
    </div>
  );
}
