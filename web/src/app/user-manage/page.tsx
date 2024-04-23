"use client";
import {
  Button,
  Input,
  Link,
  Stack,
  Box,
  SimpleGrid,
  Select,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { IoSearchCircleSharp, IoAddCircle } from "react-icons/io5";
import React, { useState, useEffect } from "react";
import { BsPen, BsChevronUp, BsChevronDown, BsTrash3 } from "react-icons/bs";
import URL from "../../data/url";
import { useRouter } from "next/navigation";
interface User {
  citizen_number: string;
  username: string;
  email: string;
  fname: string;
  lname: string;
  birth_date: Date;
  password: string;
  phone_number: string;
}

import Checker from "../../data/check";

export default function Check(){
  const router = useRouter();
  if(Checker()){
    return Home();
  }else{
    window.location.href = "/login";
  }
}


function Home() {
  const router = useRouter();
  const initialUsers: User[] = [];
  const [users, setUsers] = useState<User[]>(initialUsers);

  const [name, setName] = useState<string | undefined>();
  const handleNameChange = (event: any) => setName(event.target.value);

  const [startAge, setStartAge] = useState(0);
  const handleStartChange = (event: any) => setStartAge(event.target.value);
  const [endAge, setEndAge] = useState(100);
  const handleEndChange = (event: any) => setEndAge(event.target.value);

  const [email, setEmail] = useState<string | undefined>();
  const handleEmailChange = (event: any) => setEmail(event.target.value);
  const [tel, setTel] = useState<string | undefined>();
  const handleTelChange = (event: any) => setTel(event.target.value);

  function handleSearch() {
    fetch(
      `${URL()}/api/v1/discover?name=${name}&startAge=${startAge}&endAge=${endAge}&email=${email}&tel=${tel}`
    )
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }

  function DeleteUser(username: string) {
    const axios = require("axios");
    let data = JSON.stringify({
      username: String(username),
    });

    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: URL() + "/api/v1/user",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response: any) => {
        handleSearch();
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
  const calculateAge = (dob:Date) => {
    if (!dob) return -1; // Exit early if dob is not set
    
    const today = new Date();
    const birthDate = new Date(dob);
    return(today.getFullYear() - birthDate.getFullYear());
  };
  return (
    <>
      <div className="pt-10 text-2xl italic-100 font-extrabold text-center">
        Search user
      </div>
      <div className="flex flex-row justify-end mr-16">
        <a href="/user-manage/add">
          <IoAddCircle size="40" />
        </a>
      </div>
      <div className="shadow-lg border-1 pb-5 mx-10 rounded-lg p-6">
        <div className="font-bold text-lg mt-8 ml-6 flex items-center justify-between">

          <div className="flex row">
            <IoSearchCircleSharp size="50" className="mr-2" />
            Search
          </div>
          <div className="ml-4 md:ml-96 flex  flex-row justify-end">
            <Input
              id="searchInput"
              placeholder="Search by Firstname or Lastname"
              onChange={handleNameChange}
              boxShadow="md"
              className=""
              width="96"
            />
          </div>
        </div>
        <form className="flex flex-row  mr-4 md:mr-10 ml-6">
          <div className="flex flex-col mt-12">
            <div className="flex flex-row pt-4 pr-8 mx-1">
              <label className="mr-8">Age between:</label>
              <Input
                width="60px"
                type="number"
                rounded={"md"}
                onChange={handleStartChange}
              />
              :
              <Input
                width="60px"
                type="number"
                rounded={"md"}
                onChange={handleEndChange}
              />
            </div>
            <div className="flex flex-row pt-4 pr-3">
              <label>Email:</label>

              <Input
                width="200px"
                rounded={"md"}
                className="mb-2"
                onChange={handleEmailChange}
              />
            </div>
            <div className="flex flex-row pt-4 items-center">
              <label> Telephone: </label>
              <Input
                width="200px"
                type="string"
                rounded={"md"}
                onChange={handleTelChange}
              />
            </div>
          </div>
        </form>
        <div className="mt- ml-4 mr-4 flex flex-row justify-end ">
          <Button
            onClick={handleSearch}
            colorScheme="black"
            className="bg-black text-white rounded px-4 py-2 ml-96 mr-16"
          >
            Search
          </Button>
        </div>
      </div>
      <SimpleGrid
        className="my-3 border-1 shadow-4xl px-2 py-2 rounded-3xl m-12"
        columns={1}
        spacing={3}
      >
        {users.map((prop, index) => (
          
            <div
              key={index}
              className="flex flex-row bg-[#FFFFFF] shadow-2xl rounded-2xl p-3 justify-between content-center"
            >
              <div className="flex flex-row gap-3">
                <h1 className="text-lg font-bold ml-6">{prop.username}</h1>
                <h1 className="pl-3">{prop.fname}</h1>
                <h1 className="pl-2">{prop.lname}</h1>
                <h1 className="pl-3">{prop.email}</h1>
                <h1 className="pl-3">Age: {calculateAge(prop.birth_date)}</h1>
              </div>
              <div className="content-center">
                <div className="content-center">
                  <Button gap={2} mr={3} onClick={() => window.location.href = `/user-manage/edit/${prop.username}`}>
                    <BsPen />
                    Edit
                  </Button>
                  <Button
                    colorScheme={"red"}
                    onClick={() => DeleteUser(prop.username)}
                    rounded={"full"}
                    paddingX={-1}
                  >
                    <BsTrash3 />
                  </Button>
                </div>
              </div>
            </div>
        ))}
      </SimpleGrid>
    </>
  );
}
