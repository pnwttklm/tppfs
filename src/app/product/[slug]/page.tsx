import React from 'react';

const Page = () => {
  return (
    <div className="bg-gray-100 h-screen p-10 flex justify-center items-start pt-20">
      <div className="bg-white p-6 rounded-lg shadow-lg drop-shadow-lg w-full max-w-4xl">
        
        {/* Back Button */}
        <div className="mb-4">
          <a href="#" className="text-[#3E0070] text-lg">&larr; Back</a>
        </div>

        {/* Photo */}
        <div className="flex items-center mb-4">
          <div className="w-120 h-80 bg-gray-full rounded-lg overflow-hidden">
            <img src="/aston.jpg" alt="Aston" className="w-full h-full object-cover" />
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
