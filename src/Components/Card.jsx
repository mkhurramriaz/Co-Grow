import React from 'react';

const buttonIsClicked=()=>{
  alert('CARD BUTTON IS CLICKED');
}
const Card = ({ Heading, description,imgURL,Pricing }) => {
  return (
    <div className="max-w-sm bg-gray-100 shadow-md  rounded-lg overflow-hidden m-4 flex flex-col justify-between h-full">
      <img
        src={imgURL}
        alt="co-working"
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex-grow">
        <h1 className="text-gray-700 text-2xl font-bold text-gray-900">{Heading}</h1>
      
        <div className="mt-4 flex items-center">
          <span className="text-red-500 font-semibold">{Pricing}</span>
        </div>
        
        <ul className="mt-4 text-sm text-gray-700 list-disc list-inside">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        <button className="mb-4 bg-yellow-400 text-white text-sm font-medium py-2 px-4 rounded-lg"
        onClick={()=>buttonIsClicked()}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Card;
