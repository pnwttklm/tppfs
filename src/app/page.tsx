"use client";
import { Button, Input, Stack, Box, SimpleGrid } from '@chakra-ui/react';
import { IoSearchCircleSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

export default function Home() {
  function handleClick(){
    location.href = 'tel:028889999'
  }
  return (
    <>
      <div className="flex flex-row">
        <div>
          <img className='pt-10 pl-10 h-625px w-625px'  src="/used-cars-2.jpg.webp" alt="Used Cars" />
        </div>
        <div>
          <div className="pt-4 pl-10 text-5xl text-[#3E0070] italic-100 font-extrabold">#1 Used Car Solution</div>
          <div className='pt-6 pl-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue eget magna sit amet efficitur. Sed pretium justo blandit quam scelerisque, nec condimentum.</div>
          <div className='pt-4 pl-10'>
            <Button className='h-20 w-80 pt-7 pb-7' borderRadius="20px" borderWidth="1px" borderColor="#3E0070" variant="solid"><FaPhoneAlt className='mr-6'/> Contact Us</Button>
          </div>
        </div>
      </div>
      <div onClick={() => handleClick} className='pt-10 text-2xl italic-100 font-extrabold text-center'>Our Cars</div>

      <Search/>
      <ShowCars/>
      


    
    </>
  );
}

function Search(){
  return(
    <>
    <div className='shadow-lg border-1 pb-5 mx-10 rounded-lg'>
        <div className='font-bold text-lg mt-8 ml-6 flex items-center'><IoSearchCircleSharp size="50" className='mr-2' />Search  
          <div className='ml-4 md:ml-96 flex  flex-col justify-end'>
            <Input id="searchInput" placeholder='Search by Name, ID, and More.' boxShadow='md' className='ml-96' width='96' />
            
          </div>
          
        </div>
        <form className='flex flex-row  mr-4 md:mr-10 ml-6'>
          <div className='flex flex-col mt-12'> 
            <div className='flex flex-row pt-4 pr-3'> 
              <label htmlFor="brand">Brand:</label>
              <Input id="brand" className='ml-4' boxShadow='md'  />
            </div>
            <div className='flex flex-row pt-4 pr-3'> 
              <label htmlFor="engine">Engine:</label>
              <Input id="engine" className='ml-2' boxShadow='md' />
            </div>
            <div className='flex flex-row pt-4 items-center'> 
              <label htmlFor="fuelType">Fuel Type:</label>
              <Input id="fuelType" className='ml-0.5' boxShadow='md' />
            </div>
          </div>
          <div className='flex flex-col mr-4 md:mr-20'>
            <div className='mt-4 md:mt-64 ml-4 mr-4 md:-64 flex flex-row justify-end '>
              <Button className="bg-[#000000] text-white rounded px-4 py-2 ml-96  pl-96">Search</Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}




function ShowCars() {
  return (
    <div className='border-1 mt-8 mx-10 rounded-lg'>
      <SimpleGrid className='my-3 border-2 shadow mx-4 rounded-md ' columns={5} spacing={10}>
        {Cars.map((item, index) => (
          <div className='border-2 rounded-md shadow-lg mx-4 my-4' key={index}>
            <img className='w-64 h-48' src={item.Image} alt={item.Brand} />
            <h1>{item.Brand}</h1>
            <h1>{item.Color}</h1>
          </div>
        ))}
      </SimpleGrid>
    </div>
  );
}


const Cars = [
  { Brand: "tesla", Color: "silver", Image: "/tesla.jpeg" },
  { Brand: "tesla", Color: "silver", Image: "/tesla.jpeg" },
  { Brand: "tesla", Color: "silver", Image: "/tesla.jpeg" },
  { Brand: "tesla", Color: "silver", Image: "/tesla.jpeg" },
  { Brand: "tesla", Color: "silver", Image: "/tesla.jpeg" },
  { Brand: "tesla", Color: "silver", Image: "/tesla.jpeg" },
  { Brand: "tesla", Color: "silver", Image: "/tesla.jpeg" },
  { Brand: "tesla", Color: "silver", Image: "/tesla.jpeg" }
  



];

