import React from "react";

const MapSection = () => {
  return (
    <div className="relative h-96">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.821547627332!2d73.01058241512361!3d19.10626298707847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b94bb2601793%3A0x4e3cbe786d1b1e5e!2sOnestopNDT!5e0!3m2!1sen!2sin!4v1627925866998!5m2!1sen!2sin"
        className="absolute inset-0 w-full h-full border-0"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      <div className="absolute top-10 left-5 right-5 max-w-96 sm:bottom-10 sm:left-10  bg-[#103977] text-white p-4 rounded-lg shadow-lg ">
        <h3 className="text-lg font-bold">OnestopNDT</h3>
        <p className="text-xs">
          PAP/R/406 Rabele MIDC Near Dol Electric Company Rabele MIDC, Navi
          Mumbai - 400701.
        </p>
        <p>Landline: 022 4131 0099</p>
        <a
          href="https://www.google.com/maps"
          className="text-white underline mt-2 block"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Map Link
        </a>
      </div>
    </div>
  );
};

export default MapSection;
