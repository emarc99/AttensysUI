import React from 'react';
import plane from '@/assets/plane.svg';
import thoughts from '@/assets/thoughts.png';
import group10 from '@/assets/Group 10.png';
import cloud from '@/assets/3d-techny-international-transportation-and-delivery-logistics 1.png';
import Image from 'next/image';

const World = () => {
  return (
    <div className="w-[90%] mx-auto my-4 lg:flex lg:justify-between lg:items-center sm:h-[500px]">
      {/* 📌 Sección de Texto */}
      <div className="sm:w-[60%] flex items-center">
        <div className="w-[90%] sm:w-[80%] mx-auto">
          {/* 📌 Título */}
          <h1 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold text-[#2D3A4B] mb-5">
            Atten<span className="text-[#A666E3]">sys</span> Courses
          </h1>

          {/* 📌 Descripción */}
          <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-light text-[#2D3A4B] leading-[20px] sm:leading-[24px] lg:leading-[28px] mb-8">
            Simplifying certificate issuance, attendance tracking, and online course
            management for schools, organizations, and event managers.
          </p>

          {/* 📌 Lista */}
          <ul className="space-y-4">
            <li className="text-[14px] sm:text-[16px] lg:text-[18px] font-light text-[#9B51E0] leading-[20px] sm:leading-[24px] lg:leading-[28px]">
              <span className="text-[#2D3A4B]">
                Take and get Certified in
              </span>{' '}
              professional courses & Top-tier skillsets from all over the world.
            </li>
            <li className="text-[14px] sm:text-[16px] lg:text-[18px] font-light text-[#9B51E0] leading-[20px] sm:leading-[24px] lg:leading-[28px]">
              AttenSys{' '}
              <span className="text-[#2D3A4B]">
                is built with top-tier security protocols, including encryption and
                blockchain technology, to ensure that your data and certificates are
                safe.
              </span>
            </li>
          </ul>

          {/* 📌 Botón */}
          <div className="mt-6">
            <button className="bg-[#4A90E2] text-white font-medium text-[14px] sm:text-[16px] lg:text-[18px] py-2 px-4 sm:py-3 sm:px-6 lg:py-4 lg:px-8 rounded-lg shadow-md hover:bg-[#357ABD] transition-all">
              Get Started Today!
            </button>
          </div>
        </div>
      </div>

      {/* Imágenes Responsivas */}
      <div className="w-full sm:w-[40%] relative flex flex-col sm:flex-row justify-center sm:justify-end">

        {/* Imagenes para pantallas pequeñas */}
        <div className="sm:hidden flex flex-col items-center">
          <Image alt="planet" src={plane} className="w-[250px] h-auto mb-4" />
          <Image alt="speech" src={thoughts} className="w-[200px] h-auto" />
        </div>

        {/* Imagenes para pantallas más grandes */}
        <div className="hidden sm:flex items-center relative">
          {/* Planeta */}
          <Image
            alt="planet"
            src={plane}
            className="
        w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] 2xl:w-[420px]
        h-auto"
          />

          {/* Burbuja de texto */}
          <Image
            alt="speech"
            src={thoughts}
            className="
        absolute
        top-[-20px] sm:top-[-30px] md:top-[-40px] lg:top-[-50px] xl:top-[-60px]
        right-0 sm:right-5 md:right-10 lg:right-16 xl:right-24"
          />
        </div>
      </div>

    </div>
  );
};

export default World;
