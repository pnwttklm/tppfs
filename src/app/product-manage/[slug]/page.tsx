import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

const Page = () => {
  return (
    <div className="bg-gray-100 h-screen p-10 flex justify-center items-start pt-20">
      <div className="bg-white p-6 rounded-lg shadow-lg drop-shadow-lg w-full max-w-4xl">
        
        {/* Back Button */}
        <div className="mb-4">
          <a href="#" className="text-[#3E0070]  text-lg">&larr; Back</a>
        </div>

        {/* Photo and Upload Button */}
        <div className="flex items-center mb-4">
          <div className="w-120 h-80 bg-gray-full rounded-lg overflow-hidden">
            <img src="/aston.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div>
          <button className="bg-[#3E0070] drop-shadow-lg text-white rounded px-3 py-3 text-sm mt-64 ml-5">
  Upload New Profile Image
</button>

          </div>
        </div>

        {/* Input Fields */}
        <div className="flex mb-4 border-b pb-4">
          <div className="flex-1 pr-2">
            <InputField label="Product ID" />
            <InputField label="Brand" />
            <InputField label="Quantity" />
            <InputField label="Color" />
            <InputField label="Type" />
            <InputField label="Price" />
            <InputField label="Model" />
          </div>
          <div className="flex-1 pl-2">
            <InputField label="Release Date" />
            <InputField label="Arrive Date" />
            <InputField label="Gear" />
            <InputField label="Distance" />
            <InputField label="License" />
          </div>
        </div>

        {/* Additional Input Fields */}
        <div className="flex mb-4">
          <div className="flex-1 pr-2">
            <InputField label="Engine" />
            <InputField label="Fuel Type" />
          </div>
          <div className="flex-1 pl-2">
            <InputField label="Max Liter" />
          </div>
        </div>

        {/* Action Buttons and Trash Icon */}
        <div className="flex justify-between items-center">
          <div className="text-[#3E0070]  cursor-pointer">
            {/* Replace with your trash can icon */}
            <FaTrashAlt size="50" />
          </div>
          <div>
            <button className="text-gray-600 rounded px-4 py-2 mr-2">Cancel</button>
            <button className="bg-[#3E0070]  text-white rounded px-4 py-2">Save</button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

const InputField = ({ label }) => (
  <div className="mb-2">
    <label className="block text-gray-700 text-sm font-bold mb-1">{label}:</label>
    <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
  </div>
);

export default Page;
