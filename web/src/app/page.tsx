"use client";
import { Card, CardHeader, CardBody, SimpleGrid } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import URL from '../data/url';

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
  const dotenv = require("dotenv");
  dotenv.config();
  const initialCars: Car[] = [];
  const [cars, setCars] = useState<Car[]>(initialCars);
  const [value, setValue] = React.useState("");

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedDay = day < 10 ? "0" + day : day;
    const formattedMonth = month < 10 ? "0" + month : month;

    return `${formattedDay}/${formattedMonth}/${year}`;
  }
  fetch(`${URL()}/api/v1/search?model=&brand=&engine=&fuel=`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((data) => {
      // Process the fetched data
      setCars(data);
    })
    .catch((error) => {
      // Handle any errors that occurred during the fetch operation
      console.error("Fetch error:", error);
      // Optionally, you can set an error state or display an error message to the user
    });

  return (
    <>
      <div className="flex flex-row mx-4 my-4">
        <div className="px-12 h-full w-screen">
          <Image
            className="pt-10 pl-10"
            src="https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2024/bz4x/mlp/welcomemat/BZ4_MY24_0019_V001_desktop_JNcHtJu9.png?fmt=jpeg&fit=crop&wid=3838"
            width={1000}
            height={100}
            alt="Used Cars"
          />
        </div>
        <div className=" mt-32">
          <div className="pt-4 pl-10 text-5xl text-[#3E0070] italic-100 font-extrabold">
            #1 Used Car Solution
          </div>
          <div className="pt-6 pl-10">
            We are the best used car dealer in Thailand. We have a wide range of
            used cars for you to choose from. Our cars are in good condition and
            we offer the best price. We also provide car financing and insurance
            services. Contact us now to find your dream car.
          </div>
          <div className="pt-4 pl-10">
            <a
              className="h-20 w-80 px-6 py-3 bg-[#3E0070] text-white rounded-full text-center"
              href="tel:0812345678"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <div className="pt-10 text-2xl italic-100 font-extrabold text-center">
        Our Cars
      </div>
      <div className="pt-10 text-xl text-end mr-12">
        <a
          href="/search"
          className="text-center rounded-full bg-black text-white px-6 py-2"
        >
          Search our Cars
        </a>
      </div>

      <SimpleGrid
        className="my-3 border-1 shadow-4xl px-12 py-2 rounded-3xl"
        columns={5}
        spacing={3}
      >
        {cars &&
          cars.map((item, index) => (
            <a href={`/product/${item.product_id}`} key={index}>
              <Card className="rounded-2xl" size="md" key={index}>
                <CardHeader className="relative h-[256px]">
                  <Image
                    src={item.image}
                    alt={item.brand}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                    className="rounded-t-2xl"
                  />
                </CardHeader>
                <CardBody className="relative">
                  <h3 className=" text-[#808080] text-sm">
                    ID:{item.product_id}
                  </h3>

                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col ">
                      <h1>{item.brand}</h1>
                      <h1>{item.model}</h1>
                      <h1>{item.color}</h1>
                    </div>
                    <div className="flex flex-col text-[#808080] text-sm ">
                      <h1>{formatDate(String(item.release_date))}</h1>
                      <h1>{formatDate(String(item.arrive_date))}</h1>
                    </div>
                  </div>
                  <div className="flex flex-row justify-end mr-4 font-black">
                    {`฿ ${String(item.price)}`}
                  </div>
                </CardBody>
              </Card>
            </a>
          ))}
      </SimpleGrid>
    </>
  );
}
