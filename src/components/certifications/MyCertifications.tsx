import React, { useState, useEffect } from "react"
import UserSideBar from "../courses/UserSideBar"
import Image from "next/image"
import red_love from "@/assets/red_love.svg"
import love from "@/assets/love.svg"
import { certContent } from "@/constants/data"

const MyCertifications = () => {
  const [selected, setSelected] = useState("")
  const [page, setPage] = useState("")

  useEffect(() => {
    setPage("myCertificate")
  }, [page])

  if (selected == "" || selected == "All NFTs") {
    return (
      <div className="block sm:flex sm:flex-row mx-10 sm:mx-20 my-8">
        <UserSideBar
          page={page}
          selected={selected}
          setSelected={setSelected}
        />

        <div className="mx-auto sm:mx-20 my-12">
          {certContent.map((item, i) => (
            <div key={i}>
              <h1 className="text-[#A01B9B] font-bold text-2xl">
                {item.heading} ({item.no})
              </h1>

              <div className="grid md:grid-cols-4 lclg:grid-cols-2 gap-4 my-12">
                {item.certificates.map((cert, j) => (
                  <div key={j} className="bg-[#FFFFFF] rounded-xl shadow-lg my-4 sm:my-0">
                    <div className="relative">
                      <Image
                        src={cert.img}
                        alt={cert.cert_name}
                        className="object-cover w-[100%]"
                      />
                      <div className="bg-white absolute right-3 top-3 flex p-1 rounded">
                        <Image src={red_love} alt="love" color="red" />
                        <p className="text-xs ml-3">18k</p>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex justify-between my-3">
                        <h4>{cert.cert_name}</h4>
                        <Image src={love} alt="love" />
                      </div>
                      <div className="flex justify-between my-3">
                        <p className="font-bold text-xs">Recipient address: </p>
                        <p className="text-xs">{cert.recipient}</p>
                      </div>
                      <div className="flex justify-between my-3">
                        <p className="font-bold text-xs">Author: </p>
                        <p className="text-xs">{cert.author}</p>
                      </div>

                      <div>
                        <p className="text-xs">{cert.nft_description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-row mx-20 my-8">
      <UserSideBar page={page} selected={selected} setSelected={setSelected} />

      <div className="mx-20 my-12">
        {certContent.map((item, i) =>
          item.type == selected ? (
            <div key={i}>
              <h1 className="text-[#A01B9B] font-bold text-2xl">
                {item.heading} ({item.no})
              </h1>

              <div className="grid md:grid-cols-4 lclg:grid-cols-2 gap-4 my-12">
                {item.certificates.map((cert, j) => (
                  <div key={j} className="bg-[#FFFFFF] rounded-xl shadow-lg my-20 sm:my-0">
                    <div className="relative">
                      <Image
                        src={cert.img}
                        alt={cert.cert_name}
                        className="object-cover w-[100%]"
                      />
                      <div className="bg-white absolute right-3 top-3 flex p-1 rounded">
                        <Image src={love} alt="love" color="red" />
                        <p className="text-xs ml-3">18k</p>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex justify-between my-3">
                        <h4>{cert.cert_name}</h4>
                        <Image src={love} alt="love" />
                      </div>
                      <div className="flex justify-between my-3">
                        <p className="font-bold text-xs">Recipient address: </p>
                        <p className="text-xs">{cert.recipient}</p>
                      </div>
                      <div className="flex justify-between my-3">
                        <p className="font-bold text-xs">Author: </p>
                        <p className="text-xs">{cert.author}</p>
                      </div>

                      <div>
                        <p className="text-xs">{cert.nft_description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null,
        )}
      </div>
    </div>
  )
}

export default MyCertifications
