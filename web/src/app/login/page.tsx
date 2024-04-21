"use client";
import React, { useState } from "react";
import {
  Alert,
  AlertIcon,
  Center,
  Checkbox,
  Link,
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

interface User {
  pass: boolean,
  username: string,
  password: string,
}

export default function LoginPage() {
  const [show, setShow] = React.useState(false);
  const [ID, setID] = useState("");
  const [password, setPassword] = useState("");
  const handleID = (e: any) => setID(e.target.value);
  const handlePass = (v: any) => setPassword(v.target.value);
  const handleClick = () => setShow(!show);
  const axios = require("axios");
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

    axios
      .request(config)
      .then((response:any) => {
        if(response.data.pass){
          location.href = "/admin";
        }else{
          alert("Wrong Login Credentials");
        }
      })
      .catch((error:any) => {
        alert(error)
      });
  }

  return (
    <div className="bg-[#F5F5F5] h-screen">
      <Center className="h-full">
        <Center className="bg-[#FFFFFF] mx-6 rounded-3xl flex flex-col p-12 mt-8 w-fit shadow-2xl">
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
