"use client";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Checker from "../../../../data/check";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import URL from "../../../../data/url";
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

export default function Check({ params }: { params: { slug: string } }) {
  const router = useRouter();
  if(Checker()){
    return Page(params.slug);
  }else{
    alert("You have to log in first to access the product management page.");
    router.push("/login");
  }
}

function Page(slug : string) {
  const router = useRouter();
  const [user, setUser] = useState<User>({
    citizen_number: "",
    username: "",
    email: "",
    fname: "",
    lname: "",
    birth_date: new Date(),
    password: "",
    phone_number: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${URL()}/api/v1/user/${slug}`
        );
        // console.log(`${URL()}/api/v1/user/${slug}`);
        const data = await response.json();
        // console.log(data[0]);
        setUser(data[0]); // Update state with fetched car data
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []);

  function EditUser(user: User) {
    const axios = require("axios");
    let data = JSON.stringify({
      user,
    });

    let config = {
      method: "put",
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
        console.log(response);
        if (response) alert("Saved Successfully");
        router.push("/user-manage");
      })
      .catch((error: any) => {
        console.log(error);
        alert("Error Saving");
      });
  }

  return (
    <div className="bg-gray-100 h-full p-10 flex justify-center items-start pt-20">
      <div className="bg-white p-6 rounded-3xl shadow-lg drop-shadow-lg w-full max-w-4xl">
        {/* Back Button */}
        <div className="mb-4">
          <a href="/user-manage" className="text-[#3E0070]  text-lg">
            &larr; Back
          </a>
        </div>

        {/* Input Fields */}
        <div className="flex mb-4 border-b pb-4">
          <div className="flex-1 pr-2">
            <InputField
              label="Username"
              type="locked"
              property="username"
              user={user}
              setUser={setUser}
            />
            <InputField
              label="Firstname"
              type="string"
              property="fname"
              user={user}
              setUser={setUser}
            />
            <InputField
              label="Citizen Number"
              type="string"
              property="citizen_number"
              user={user}
              setUser={setUser}
            />
            <InputField
              label="Email"
              type="string"
              property="email"
              user={user}
              setUser={setUser}
            />
          </div>
          <div className="flex-1 pl-2">
            <InputField
              label="Password"
              type="password"
              property="password"
              user={user}
              setUser={setUser}
            />
            <InputField
              label="Lastname"
              type="string"
              property="lname"
              user={user}
              setUser={setUser}
            />
            <InputField
              label="Date of Birth"
              type="datetime"
              property="birth_date"
              user={user}
              setUser={setUser}
            />
            <InputField
              label="Phone Number"
              type="tel"
              property="phone_number"
              user={user}
              setUser={setUser}
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
              onClick={() => EditUser(user)}
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
  user,
  setUser,
}: {
  label: string;
  type: string;
  property: keyof User;
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setUser({ ...user, [property]: value });
  };
  const [show, setShow] = React.useState(false);
  const calculateAge = (dob:Date) => {
    if (!dob) return -1; // Exit early if dob is not set
    
    const today = new Date();
    const birthDate = new Date(dob);
    return(today.getFullYear() - birthDate.getFullYear());
  };
  if (type == "datetime") {
    const isoDateString = user[property] || "0001-05-01T17:00:00.000Z";
    const date = new Date(isoDateString);

    const formattedDate = date.toISOString().split("T")[0];
    return (
      <div className="mb-2">
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-1">
            {label} <a className="text-[#FE0000]">(MM/DD/YYYY)</a> Age = [{calculateAge(new Date(user[property]))}]:
          </label>
          <InputGroup>
            <Input
              type="date"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formattedDate}
              isRequired={true}
            />
          </InputGroup>
        </div>
      </div>
    );
  } else if (type == "password") {
    return (
      <div className="mb-2">
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-1">
            {label}:
          </label>
          <InputGroup className=" bg-[#FFFFFF]" size="md">
            <Input
              pr="4.5rem"
              rounded={"md"}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={user[property]?.toString()}
              onChange={handleChange}
              type={show ? "text" : "password"}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                {show ? (
                  <BsEyeSlashFill color="##1C3B5A" />
                ) : (
                  <BsEyeFill color="##1C3B5A" />
                )}
              </Button>
            </InputRightElement>
          </InputGroup>
        </div>
      </div>
    );
  } else if (type == "locked") {
    return (
      <div className="mb-2">
        <label className="block text-gray-700 text-sm font-bold mb-1">
          {label}:
        </label>
        <Input
          type="text"
          isDisabled={true}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={String(user[property])}
          isRequired={true}
        />
      </div>
    );
  }
  else{
    return (
      <div className="mb-2">
        <label className="block text-gray-700 text-sm font-bold mb-1">
          {label}:
        </label>
        <Input
          type="text"
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={String(user[property])}
          isRequired={true}
        />
      </div>
    );
  }
}