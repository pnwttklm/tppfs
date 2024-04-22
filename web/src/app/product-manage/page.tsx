"use client";
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardBody,
  SimpleGrid,
  Select,
  CardFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { IoSearchCircleSharp } from "react-icons/io5";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoAddCircle } from "react-icons/io5";
import { BsTrash3 } from "react-icons/bs";
import URL from "../../data/url";
import Checker from "../../data/check";
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

export default function Check(){
  if(Checker()){
    return Page();
  }else{
    alert("You have to log in first to access the product management page.");
    location.href = "/login";
  }
}


function Page() {
  const initialCars: Car[] = [];
  const [cars, setCars] = useState<Car[]>(initialCars);
  const [value, setValue] = React.useState("");
  const handleChange = (event: any) => setValue(event.target.value);
  const [brands, setBrands] = useState<string[]>([]);
  const [engine, setEngine] = useState<string[]>([]);
  const [fuel, setFuel] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState();
  const handleBrands = (event: any) => setSelectedBrands(event.target.value);
  const [selectedEngine, setSelectedEngine] = useState();
  const handleEngine = (event: any) => setSelectedEngine(event.target.value);
  const [selectedFuel, setSelectedFuel] = useState();
  const handleFuel = (event: any) => setSelectedFuel(event.target.value);

  const { isOpen, onOpen, onClose } = useDisclosure();

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedDay = day < 10 ? "0" + day : day;
    const formattedMonth = month < 10 ? "0" + month : month;

    return `${formattedDay}/${formattedMonth}/${year}`;
  }

  useEffect(() => {
    fetch(URL() + "/api/v1/brand")
      .then((res) => res.json())
      .then((ress) => {
        const brandsArray: string[] = ress.map(
          (item: { brand: string }) => item.brand
        );
        setBrands(brandsArray);
      })
      .catch((error) => console.error("Error fetching brands:", error));

    fetch(URL() + "/api/v1/engine")
      .then((res) => res.json())
      .then((ress) => {
        const enginesArray: string[] = ress.map(
          (item: { engine: string }) => item.engine
        );
        setEngine(enginesArray);
      })
      .catch((error) => console.error("Error fetching engines:", error));

    fetch(URL() + "/api/v1/fuel")
      .then((res) => res.json())
      .then((ress) => {
        const fuelArray: string[] = ress.map(
          (item: { fuel_type: string }) => item.fuel_type
        );
        setFuel(fuelArray);
      })
      .catch((error) => console.error("Error fetching fuel:", error));
  }, []);

  function SearchHandle() {
    fetch(
      URL() + "/api/v1/search?model=" +
        value +
        "&brand=" +
        selectedBrands +
        "&engine=" +
        selectedEngine +
        "&fuel=" +
        selectedFuel
    )
      .then((res) => res.json())
      .then((data) => setCars(data));
  }
  function DeleteCar(ID: string) {
    const axios = require("axios");
    let data = JSON.stringify({
      product_id: String(ID),
    });

    let config = {
      method: "delete",
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
        SearchHandle();
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
  return (
    <>
      <div className="mx-6 my-6 flex flex-row justify-center text-5xl text-[#000000] italic-100 font-extrabold mt-32">
        Search Product
      </div>
      <div className="flex flex-row justify-end mr-16" onClick={() => {
                  if(Checker()){
                    location.href = "/product-manage/add";
                  }else{
                    alert("You have to log in first to add the product.");
                    location.href = "/login";
                  }
                }}>
          <IoAddCircle size="40" />
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
              placeholder="Search by Model"
              onChange={handleChange}
              onClick={() => SearchHandle()}
              boxShadow="md"
              className=""
              width="96"
            />
          </div>
        </div>
        <form className="flex flex-row  mr-4 md:mr-10 ml-6">
          <div className="flex flex-col mt-12">
            <div className="flex flex-row pt-4 pr-3">
              <label htmlFor="brand">Brand:</label>
              <Select placeholder="Select Brand" onChange={handleBrands}>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </Select>
            </div>
            <div className="flex flex-row pt-4 pr-3">
              <label htmlFor="engine">Engine:</label>
              <Select placeholder="Select Engine" onChange={handleEngine}>
                {engine.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </Select>
            </div>
            <div className="flex flex-row pt-4 items-center">
              <label htmlFor="fuelType">Fuel Type:</label>
              <Select placeholder="Select Fuel" onChange={handleFuel}>
                {fuel.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </Select>
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
      <SimpleGrid
        className="my-3 border-1 shadow-4xl px-12 py-2 rounded-3xl"
        columns={5}
        spacing={3}
      >
        {cars &&
          cars.map((item, index) => (
            <Card className="rounded-2xl" size="md" key={index}>
                <CardHeader className="relative h-[256px]" onClick={() => {
                  if(Checker()){
                    location.href = `/product-manage/edit/${item.product_id}`;
                  }else{
                    alert("You have to log in first to edit the product.");
                    location.href = "/login";
                  }
                }}>
                  <Image
                    src={item.image}
                    alt={item.brand}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                    className="rounded-t-2xl"
                  />
                </CardHeader>
                <CardBody className="relative" onClick={() => {
                  if(Checker()){
                    location.href = `/product-manage/edit/${item.product_id}`;
                  }else{
                    alert("You have to log in first to edit the product.");
                    location.href = "/login";
                  }
                }}>
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
              <CardFooter className="flex flex-row justify-between">
                <Button backgroundColor={"red.500"} color={"white"} onClick={() => {
                  if(Checker()){
                    DeleteCar(String(item.product_id))
                  }else{
                    alert("You have to log in first to delete the product.");
                    location.href = "/login";
                  }
                }}>
                  <BsTrash3></BsTrash3>
                </Button>
                <Button onClick={() => {
                  if(Checker()){
                    location.href = `/product-manage/edit/${item.product_id}`;
                  }else{
                    alert("You have to log in first to edit the product.");
                    location.href = "/login";
                  }
                }}>Edit</Button>
              </CardFooter>
            </Card>
          ))}
      </SimpleGrid>
    </>
  );
}
