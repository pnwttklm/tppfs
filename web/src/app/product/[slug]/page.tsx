"use client";
import React, { useState, useEffect } from "react";

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

function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const [car, setCar] = useState<Car | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch car data asynchronously
        const response = await fetch(`http://localhost:3030/api/v1/car/${slug}`); // Replace with your API endpoint
        const data = await response.json();
        // console.log(data[0]);
        setCar(data[0]); // Update state with fetched car data
      } catch (error) {
        console.error('Error fetching car data:', error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []);
  
  
  return (
    <div className="bg-gray-100 h-full p-10 flex justify-center items-start pt-20">
      <div className="bg-white p-6 rounded-lg shadow-lg drop-shadow-lg w-full max-w-4xl">
        {/* Back Button */}
        <div className="mb-4">
          <a href="/" className="text-[#3E0070] text-lg">
            &larr; Back
          </a>
        </div>
        {car && (
          <>
            {/* Photo */}
            <div className="flex items-center mb-4">
              <div className="w-120 h-80 bg-gray-full rounded-lg overflow-hidden">
                <img
                  src={car.image}
                  alt="Aston"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Input Fields */}
            <div className="flex mb-4 border-b pb-4">
              <div className="flex-1 pr-2">
                <InputField label="Product ID" data={car.product_id}/>
                <InputField label="Brand" data={car.brand}/>
                <InputField label="Quantity" data="1"/>
                <InputField label="Color" data={car.color}/>
                <InputField label="Type" data={car.type}/>
                <InputField label="Price" data={String(car.price)}/>
                <InputField label="Model" data={car.model}/>
              </div>
              <div className="flex-1 pl-2">
                <InputField label="Release Date" data={String(car.release_date)}/>
                <InputField label="Arrive Date" data={String(car.arrive_date)}/>
                <InputField label="Gear" data={car.gear}/>
                <InputField label="Distance" data={car.distance}/>
                <InputField label="License" data={car.license}/>
              </div>
            </div>

            {/* Additional Input Fields */}
            <div className="flex mb-4">
              <div className="flex-1 pr-2">
                <InputField label="Engine" data={car.engine}/>
                <InputField label="Fuel Type" data={car.fuel_type}/>
              </div>
              <div className="flex-1 pl-2">
                <InputField label="Max Liter" data={car.max_liter}/>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const InputField = ({ label, data }: { label: string, data:string }) => (
  <div className="mb-2">
    <label className="block text-gray-700 text-sm font-bold mb-1">
      {label}:
    </label>
    <h1
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    >
      {data}
      </h1>
  </div>
);

export default Page;
