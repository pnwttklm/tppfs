"use client";
import { Button, Input, Link, Stack, Box, SimpleGrid } from "@chakra-ui/react";
import { IoSearchCircleSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import React, { useState } from "react";

interface Car {
  image: string;
  brand: string;
  color: string;
  type: string;
  price: number;
  model: string;
  engine: string;
  fuel_type: string;
  distance: string;
  max_liter: string;
  gear: string;
  product_id: string;
  license: string;
  release_date: Date;
  arrive_date: Date;
  datetime: Date | null;
  username: string;
}

export default function Home() {
  const initialCars: Car[] = [];
  const [cars, setCars] = useState<Car[]>(initialCars);
  function SearchHandle() {
    fetch("http://localhost:3030/api/v1/car")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }
  return (
    <>
      <div className="flex flex-row mx-4 my-4">
        <div>
          <img
            className="pt-10 pl-10 h-625px w-625px"
            src="/used-cars-2.jpg.webp"
            alt="Used Cars"
          />
        </div>
        <div>
          <div className="pt-4 pl-10 text-5xl text-[#3E0070] italic-100 font-extrabold">
            #1 Used Car Solution
          </div>
          <div className="pt-6 pl-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            congue eget magna sit amet efficitur. Sed pretium justo blandit quam
            scelerisque, nec condimentum.
          </div>
          <div className="pt-4 pl-10">
            <Button
              className="h-20 w-80 pt-7 pb-7"
              borderRadius="20px"
              borderWidth="1px"
              borderColor="#3E0070"
              variant="solid"
            >
              <FaPhoneAlt className="mr-6" /> Contact Us
            </Button>
          </div>
        </div>
      </div>
      <div className="pt-10 text-2xl italic-100 font-extrabold text-center">
        Our Cars
      </div>

      <div className="shadow-lg border-1 pb-5 mx-10 rounded-lg">
        <div className="font-bold text-lg mt-8 ml-6 flex items-center">
          <IoSearchCircleSharp size="50" className="mr-2" />
          Search
          <div className="ml-4 md:ml-96 flex  flex-row justify-end">
            <Input
              id="searchInput"
              placeholder="Search by Name, ID, and More."
              boxShadow="md"
              className="ml-96"
              width="96"
            />
          </div>
        </div>
        <form className="flex flex-row  mr-4 md:mr-10 ml-6">
          <div className="flex flex-col mt-12">
            <div className="flex flex-row pt-4 pr-3">
              <label htmlFor="brand">Brand:</label>
              <Input id="brand" className="ml-4" boxShadow="md" />
            </div>
            <div className="flex flex-row pt-4 pr-3">
              <label htmlFor="engine">Engine:</label>
              <Input id="engine" className="ml-2" boxShadow="md" />
            </div>
            <div className="flex flex-row pt-4 items-center">
              <label htmlFor="fuelType">Fuel Type:</label>
              <Input id="fuelType" className="ml-0.5" boxShadow="md" />
            </div>
          </div>
        </form>
        <div className="mt- ml-4 mr-4 flex flex-row justify-end ">
          <Button
            onClick={() => SearchHandle()}
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
        columns={5}
        spacing={0.5}
      >
        {cars &&
          cars.map((item, index) => (
            <Link
              className="border-1 rounded-3xl shadow-lg  my-0.5 px-2 py-2"
              href={`/product/${item.product_id}`}
              key={index}
            >
              <img
                className="w-64 h-48 rounded-lg my-2"
                src={item.image}
                alt={item.brand}
              />
              <h3 className=" text-[#808080] text-sm">ID:{item.product_id}</h3>

              <div className="flex flex-row space-x-32 ">
                <div className="flex flex-col ">
                  <h1>{item.brand}</h1>
                  <h1>{item.color}</h1>
                </div>
                <div className="flex flex-col text-[#808080] text-sm">
                  <h1>{String(item.release_date)}</h1>
                  <h1>{String(item.arrive_date)}</h1>
                </div>
              </div>
              <div className="flex flex-row justify-end mr-4">{item.price}</div>
            </Link>
          ))}
      </SimpleGrid>
    </div>
    </>
  );
}
