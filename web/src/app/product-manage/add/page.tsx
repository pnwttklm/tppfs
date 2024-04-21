"use client";
import { FaTrashAlt } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button, Input } from "@chakra-ui/react";
import URL from "../../../data/url";
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

export default function Check({ params }: { params: { slug: string } }) {
  if(localStorage.getItem('Status')){
    return Page(params.slug);
  }else{
    alert("You have to log in first to access the product management page.");
    location.href = "/login";
  }
}

function Page() {
  const [car, setCar] = useState<Car>({
    image: "",
    brand: "",
    color: "",
    type: "",
    price: 0,
    model: "",
    engine: "",
    fuel_type: "",
    distance: "",
    max_liter: "",
    gear: "",
    product_id: "",
    license: "",
    release_date: new Date(),
    arrive_date: new Date(),
    datetime: null,
    username: "",
  });

  function AddCar(car: Car) {
    const axios = require("axios");
    let data = JSON.stringify({
      car,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: URL() + "/api/v1/car",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response: any) => {
        console.log(response);
        if (response) alert("Added Successfully");
        window.location.href = "/product-manage";
      })
      .catch((error: any) => {
        alert("Error Adding Car");
      });
  }

  return (
    <div className="bg-gray-100 h-full p-10 flex justify-center items-start pt-20">
      <div className="bg-white p-6 rounded-3xl shadow-lg drop-shadow-lg w-full max-w-4xl">
        {/* Back Button */}
        <div className="mb-4">
          <a href="/product-manage" className="text-[#3E0070]  text-lg">
            &larr; Back
          </a>
        </div>

        {/* Photo and Upload Button */}
        <div className="flex items-center mb-4">
          <div className="w-120 h-80 bg-gray-full rounded-lg overflow-hidden">
            <Image
              src={car?.image || "/mock.png"}
              alt="Aston"
              className="w-screen h-full object-cover"
              width={480}
              height={320}
            />
          </div>
        </div>

        {/* Input Fields */}
        <div className="flex mb-4 border-b pb-4">
          <div className="flex-1 pr-2">
            <InputField
              label="Car Image"
              type="string"
              property="image"
              car={car}
              setCar={setCar}
            />
            <InputField
              label="Product ID"
              type="string"
              property="product_id"
              car={car}
              setCar={setCar}
            />
            <InputField
              label="Brand"
              type="string"
              property="brand"
              car={car}
              setCar={setCar}
            />
            <InputField
              label="Color"
              type="string"
              property="color"
              car={car}
              setCar={setCar}
            />
            <InputField
              label="Type"
              type="string"
              property="type"
              car={car}
              setCar={setCar}
            />
            <InputField
              label="Price"
              type="string"
              property="price"
              car={car}
              setCar={setCar}
            />
            <InputField
              label="Model"
              type="string"
              property="model"
              car={car}
              setCar={setCar}
            />
          </div>
          <div className="flex-1 pl-2">
            <InputField
              label="Release Date"
              type="datetime"
              property="release_date"
              car={car}
              setCar={setCar}
            />
            <InputField
              label="Arrive Date"
              type="datetime"
              property="arrive_date"
              car={car}
              setCar={setCar}
            />
            <InputField
              label="Gear (A/M/O)"
              type="string"
              property="gear"
              car={car}
              setCar={setCar}
            />
            <InputField
              label="Distance"
              type="string"
              property="distance"
              car={car}
              setCar={setCar}
            />
            <InputField
              label="License"
              type="string"
              property="license"
              car={car}
              setCar={setCar}
            />
          </div>
        </div>

        {/* Additional Input Fields */}
        <div className="flex mb-4">
          <div className="flex-1 pr-2">
            <InputField
              label="Engine"
              type="string"
              property="engine"
              car={car}
              setCar={setCar}
            />
            <InputField
              label="Fuel Type"
              type="string"
              property="fuel_type"
              car={car}
              setCar={setCar}
            />
          </div>
          <div className="flex-1 pl-2">
            <InputField
              label="Max Liter"
              type="string"
              property="max_liter"
              car={car}
              setCar={setCar}
            />
          </div>
        </div>

        {/* Action Buttons and Trash Icon */}
        <div className="flex justify-between items-center">
          <div className="text-[#3E0070]  cursor-pointer">
            {/* <FaTrashAlt size="50" /> */}
          </div>
          <div>
            <a
              href={"/product-manage"}
              className="text-gray-600 rounded px-4 py-2 mr-2"
            >
              Cancel
            </a>
            <Button
              className="bg-[#3E0070]  text-white rounded px-4 py-2"
              onClick={() => {
                if(localStorage.getItem('Status')){
                  AddCar(car)
                }else{
                  alert("You have to log in first to add the product.");
                  location.href = "/login";
                }
              }}
              background={"#3E0070"}
              color={"#FFFFFF"}
              type="submit"
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputField({
  label,
  type,
  property,
  car,
  setCar,
}: {
  label: string;
  type: string;
  property: keyof Car;
  car: Car;
  setCar: React.Dispatch<React.SetStateAction<Car>>;
}) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCar({ ...car, [property]: value });
  };

  return (
    <div className="mb-2">
      {type === "datetime" ? (
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-1">
            {label} <a className="text-[#FE0000]">(MM/DD/YYYY)</a>:
          </label>
          <Input
            type="date"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={car[property]?.toString()}
            isRequired={true}
          />
        </div>
      ) : (
        <>
          <label className="block text-gray-700 text-sm font-bold mb-1">
            {label}:
          </label>

          <Input
            type="text"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={String(car[property])}
            isRequired={true}
          />
        </>
      )}
    </div>
  );
}

