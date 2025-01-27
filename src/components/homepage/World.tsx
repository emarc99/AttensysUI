import React from 'react';
import plane from '@/assets/plane.svg';
import thoughts from '@/assets/thoughts.png';
import group10 from '@/assets/Group 10.png';
import cloud from '@/assets/3d-techny-international-transportation-and-delivery-logistics 1.png';
import Image from 'next/image';

const World = () => {
  return (
    <div className="w-[90%] mx-auto my-4 lg:flex lg:justify-between lg:items-center sm:h-[500px]">
      <div className="sm:w-[60%] flex items-center">
        <div className="w-[90%] sm:w-[80%] mx-auto">
          {/* H1 Responsivo */}
          <h1 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2D3A4B] mb-5">
            Atten<span className="text-[#A666E3]">sys</span> Courses
          </h1>

          {/* P Responsivo */}
          <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-light text-[#2D3A4B] leading-[20px] sm:leading-[24px] lg:leading-[28px] mb-8">
            Simplifying certificate issuance, attendance tracking, and online course
            management for schools, organizations, and event managers.
          </p>

          {/* Primer LI Responsivo */}
          <li className="text-[14px] sm:text-[16px] lg:text-[18px] font-light text-[#9B51E0] leading-[20px] sm:leading-[24px] lg:leading-[28px] mb-6">
            <span className="text-[#2D3A4B]">
              Take and get Certified in
            </span>{' '}
            professional courses & Top-tier skillsets from all over the world.
          </li>

          {/* Segundo LI Responsivo */}
          <li className="text-[14px] sm:text-[16px] lg:text-[18px] font-light text-[#9B51E0] leading-[20px] sm:leading-[24px] lg:leading-[28px] mb-6">
            AttenSys{' '}
            <span className="text-[#2D3A4B]">
              is built with top-tier security protocols, including encryption and
              blockchain technology, to ensure that your data and certificates are
              safe.
            </span>
          </li>

          {/* Botón Responsivo */}
          <div className="mt-6">
            <button className="bg-[#4A90E2] text-white font-medium text-[14px] sm:text-[16px] lg:text-[18px] py-2 px-4 sm:py-3 sm:px-6 lg:py-4 lg:px-8 rounded-lg shadow-md hover:bg-[#357ABD] transition-all">
              Get Started Today!
            </button>
          </div>
        </div>
      </div>



      {/* Imágenes Responsivas */}
      <div className="w-[60%] sm:w-[40%] relative">
        {/* Imagenes para pantallas pequeñas */}
        <div className="sm:hidden flex flex-col items-center">
          <Image alt="group-10" src={group10} className="w-[250px] h-auto mb-4" />
          <Image alt="cloud" src={cloud} className="w-[200px] h-auto" />
        </div>

        {/* Imagenes para pantallas medianas y grandes */}
        <div className="hidden sm:block">
          <Image alt="thoughts-icon" src={thoughts} className="absolute top-0 left-0 w-[300px] h-auto" />
          <Image
            alt="plane-icon"
            src={plane}
            className="absolute top-10 right-10 w-[350px] lg:w-[320px] xl:w-[250px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default World;
