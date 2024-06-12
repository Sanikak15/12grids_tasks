import React from "react";


const InfoSection = () => {
  const sections = [
    {  image: "/assets/image.png" },
    { image: "/assets/Hiring.png" },
    {  image: "/assets/Airticle.png" },
    { image: "/assets/frame.png" },
    {  image: "/assets/frame2.png" },
    
  ];

  return (
    <div className=" grid sm:grid-cols-5 grid-cols-2 gap-5 py-10 p-4 mx-auto">
      {sections.map((section, index) => (
        <div key={index} className="text-center">
          <img
            src={section.image}
            alt={section.title}
            className="w-40 h-40 object-cover mb-2  "
          />
          <p>{section.title}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoSection;
