"use client";
import { Button, Input, Link, Stack, Box, SimpleGrid, Select,InputGroup,InputLeftElement } from "@chakra-ui/react";
import { IoSearchCircleSharp } from "react-icons/io5";
import React, { useState, useEffect } from "react";
import { FaTrashAlt  } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import URL from "../../data/url";
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

export default function Check(){
  if(localStorage.getItem('Status')){
    return Home();
  }else{
    alert("You have to log in first to access the user management page.");
    location.href = "/login";
  }
}


function Home() {
  const initialUsers: User[] = [];
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [value, setValue] = useState('')
  const handleChange = (event:any) => setValue(event.target.value)
  
  const [brands, setBrands] = useState<string[]>([]);
  const [engine, setEngine] = useState<string[]>([]);
  const [fuel, setFuel] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string | undefined>();
  const handleBrandChange = (event:any) => setSelectedBrand(event.target.value)
  const [selectedEngine, setSelectedEngine] = useState<string | undefined>();
  const handleEngineChange = (event:any) => setSelectedEngine(event.target.value)
  const [selectedFuel, setSelectedFuel] = useState<string | undefined>();
  const handleFuelChange = (event:any) => setSelectedFuel(event.target.value)

  function handleSearch() {
    
    fetch(`http://localhost:3030/api/v1/search?model=${value}&brand=${selectedBrand}&engine=${selectedEngine}&fuel=${selectedFuel}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }

  return (
    <>
      <div className="pt-10 text-2xl italic-100 font-extrabold text-center">
        Search user
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
              placeholder="Search by name, username and more"
              onChange={handleChange}
              onClick={handleSearch}
              boxShadow="md"
              className=""
              width="96"
            />
          </div>
        </div>
        <form className="flex flex-row  mr-4 md:mr-10 ml-6">
          <div className="flex flex-col mt-12">
            <div className="flex flex-row pt-4 pr-8 mx-1">
              <label className="mr-8" >Age between:</label>   
              <Input width="60px"
                type="number"
                rounded={"md"}
              />:
             <Input
               
               width="60px"
               type="number"
               
               rounded={"md"}
             />
            </div>
            <div className="flex flex-col pt-4 pr-3">
              <label >Last login between:</label>
              
              <Input width="200px"
                type="Date"
                rounded={"md"}
                className="mb-2"
              />
             <Input
               width="200px"
               type="Date"
               
               rounded={"md"}
             />
             
            </div>
            <div className="flex flex-row pt-4 items-center">
              <label> Telephone Country:</label>
              <Input
               width="200px"
               type="string"
               
               rounded={"md"}
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
      <div className=" mt-8 mx-10 rounded-lg shadow-2xl">
        <SimpleGrid
          className="my-3 border-1 shadow-4xl px-2 py-2 rounded-3xl "
          columns={1}
          spacing={0.5}
        >
          {users.map((u, index) => (
            <Link
            className="border-1 rounded-3xl shadow-lg my-0.5  flex flex-row"
            href={`/user/${u.min_age}`}
            key={index}
          >
            <div className="flex items-center">
              <img
                className="w-20 h-20 rounded-full my-2"
                src={u.image}
                alt={u.username}
              />
          
              <div className="flex flex-col ml-4">
              <h1>{u.username}</h1>
               {/* <h1>{u.fname}</h1> */}
                {/* <h1>{u.lname}</h1> */}
              </div>
            </div>
          
            <div className="ml-auto mr-4  flex items-center">
              <Button size="20" className="rounded-xl p-2 text-[#000000] mr-3 text-md">
                <MdEdit size="20" />
                Edit
              </Button>
              <FaTrashAlt className="text-white bg-red-500 rounded-full p-1" size="30" />
            </div>
          </Link>
          
          ))}
        </SimpleGrid>
      </div>
    </>
  );
}
